import React, { useEffect, useState } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

interface Devotional {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  link: string;
}

const DailyDevotionalSection = () => {
  const [devotional, setDevotional] = useState<Devotional | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevotional = async () => {
      try {
        // Use rss2json API to convert RSS to JSON (avoids CORS issues)
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://www.ucc.org/feed/?post_type=daily_devotion'
        );
        const data = await response.json();

        if (data.status === 'ok' && data.items?.length > 0) {
          const item = data.items[0];
          // Clean up the excerpt - remove HTML tags and limit length
          const cleanExcerpt = item.description
            ?.replace(/<[^>]*>/g, '')
            ?.substring(0, 200) + '...';

          setDevotional({
            title: item.title,
            author: item.author || 'UCC',
            date: new Date(item.pubDate).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            excerpt: cleanExcerpt,
            link: item.link
          });
        }
      } catch (error) {
        console.error('Failed to fetch devotional:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDevotional();
  }, []);

  return (
    <section className="py-16 px-4 bg-white dark:bg-[#1a0a17]">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
            United Church of Christ
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-8">
            Daily Devotional
          </h2>

          {loading ? (
            <div className="animate-pulse">
              <div className="h-6 bg-church-100 dark:bg-church-800 rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-church-100 dark:bg-church-800 rounded w-1/2 mx-auto mb-6"></div>
              <div className="h-20 bg-church-100 dark:bg-church-800 rounded mb-6"></div>
            </div>
          ) : devotional ? (
            <div className="bg-church-50 dark:bg-church-900/50 rounded-lg p-8 text-left">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-church-100 dark:bg-church-800 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-church-600 dark:text-church-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-church-800 dark:text-white mb-1">
                    {devotional.title}
                  </h3>
                  <p className="text-sm text-church-500 dark:text-church-400">
                    {devotional.date} · by {devotional.author}
                  </p>
                </div>
              </div>

              <p className="text-church-600 dark:text-white/70 mb-6 leading-relaxed">
                {devotional.excerpt}
              </p>

              <a
                href={devotional.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-church-800 dark:text-white font-semibold hover:text-cta transition-colors border-b-2 border-church-800 dark:border-white hover:border-cta pb-1"
              >
                Read Full Devotional
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <div className="bg-church-50 dark:bg-church-900/50 rounded-lg p-8">
              <BookOpen className="w-12 h-12 text-church-400 dark:text-church-600 mx-auto mb-4" />
              <p className="text-church-600 dark:text-white/70 mb-6">
                Start your day with reflection and inspiration from the United Church of Christ.
              </p>
              <a
                href="https://www.ucc.org/daily-devotional/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-church-800 dark:text-white font-semibold hover:text-cta transition-colors border-b-2 border-church-800 dark:border-white hover:border-cta pb-1"
              >
                Visit UCC Daily Devotional
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DailyDevotionalSection;
