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
let cachedRequest: Promise<UccDevotional | null> | null = null;

function churchDate() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(new Date());
}

function getDevotional(today: string): Promise<UccDevotional | null> {
  if (cachedRequest && cachedDate === today) return cachedRequest;
  cachedDate = today;
  cachedRequest = fetch(feedUrl)
    .then(async response => {
      if (!response.ok) throw new Error('UCC feed unavailable');
      const data = await response.json();
      if (data.status !== 'ok' || !Array.isArray(data.items)) return null;
      const item: FeedItem | undefined = data.items.find((entry: FeedItem) => entry.pubDate?.slice(0, 10) === today);
      if (!item?.title || !item.link) return null;
      const excerpt = (item.description || '')
        .replace(/<[^>]*>/g, ' ')
        .replace(/&nbsp;|&#160;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/\s+/g, ' ')
        .trim();
      return {
        title: item.title,
        author: item.author || 'UCC',
        date: new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/New_York', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        }).format(new Date(`${today}T12:00:00Z`)),
        excerpt: excerpt.length > 260 ? `${excerpt.slice(0, 260).trimEnd()}…` : excerpt,
        link: item.link,
      };
    })
    .catch(() => null);
  return cachedRequest;
}

export function useUccDevotional() {
  const [devotional, setDevotional] = useState<UccDevotional | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getDevotional(churchDate()).then(entry => {
      if (active) {
        setDevotional(entry);
        setLoading(false);
      }
    });
    return () => { active = false; };
  }, []);

  return { devotional, loading };
}