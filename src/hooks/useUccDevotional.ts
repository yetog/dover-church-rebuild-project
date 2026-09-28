import { useEffect, useState } from 'react';

export interface UccDevotional {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  link: string;
}

type FeedItem = {
  title?: string;
  author?: string;
  pubDate?: string;
  description?: string;
  link?: string;
};

const feedUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://www.ucc.org/feed/?post_type=daily_devotion';
let cachedDate = '';
let cachedRequest: Promise<UccDevotional[]> | null = null;

function churchDate() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(new Date());
}

function getDevotionals(today: string): Promise<UccDevotional[]> {
  if (cachedRequest && cachedDate === today) return cachedRequest;
  cachedDate = today;
  cachedRequest = fetch(feedUrl)
    .then(async response => {
      if (!response.ok) throw new Error('UCC feed unavailable');
      const data = await response.json();
      if (data.status !== 'ok' || !Array.isArray(data.items)) return [];
      return (data.items as FeedItem[])
        .filter(item => item.title && item.link && item.pubDate && item.pubDate.slice(0, 10) <= today)
        .sort((a, b) => (b.pubDate || '').localeCompare(a.pubDate || ''))
        .slice(0, 3)
        .map(item => {
          const publishedDate = item.pubDate?.slice(0, 10) || today;
          const excerpt = (item.description || '')
            .replace(/<[^>]*>/g, ' ')
            .replace(/&nbsp;|&#160;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/\s+/g, ' ')
            .trim();
          return {
            title: item.title || '',
            author: item.author || 'UCC',
            date: new Intl.DateTimeFormat('en-US', {
              timeZone: 'America/New_York', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            }).format(new Date(`${publishedDate}T12:00:00Z`)),
            excerpt: excerpt.length > 260 ? `${excerpt.slice(0, 260).trimEnd()}…` : excerpt,
            link: item.link || '',
          };
        });
    })
    .catch(() => []);
  return cachedRequest;
}

export function useUccDevotional() {
  const [devotionals, setDevotionals] = useState<UccDevotional[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getDevotionals(churchDate()).then(entries => {
      if (active) {
        setDevotionals(entries);
        setLoading(false);
      }
    });
    return () => { active = false; };
  }, []);

  return { devotionals, loading };
}