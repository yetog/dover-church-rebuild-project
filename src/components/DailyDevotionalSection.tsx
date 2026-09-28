import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useUccDevotional } from '@/hooks/useUccDevotional';

const DailyDevotionalSection = () => {
  const { devotional, loading } = useUccDevotional();

  return (
    <section className="py-16 px-4 bg-church-50 dark:bg-[#1a0a17]">
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

              <p className="text-church-600 dark:text-white mb-6 leading-relaxed">
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
              <p className="text-church-600 dark:text-white mb-6">
                Today's UCC devotional is not available here yet. Visit UCC for the latest reflection.
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
