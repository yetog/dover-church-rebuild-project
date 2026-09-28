import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useUccDevotional } from '@/hooks/useUccDevotional';

const DailyDevotionalSection = () => {
  const { devotionals, loading } = useUccDevotional();

  return (
    <section className="py-16 px-4 bg-church-50 dark:bg-[#1a0a17]">
      <div className="container-max">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
            United Church of Christ
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-8">
            Daily Devotional
          </h2>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse" aria-label="Loading devotionals">
              {[1, 2, 3].map(day => (
                <div key={day} className="h-64 bg-church-100 dark:bg-church-800 rounded-lg" />
              ))}
            </div>
          ) : devotionals.length ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {devotionals.map(devotional => (
                <article key={devotional.link} className="bg-background dark:bg-church-900/50 border border-border rounded-lg p-6 flex flex-col min-w-0">
                  <BookOpen className="w-7 h-7 text-church-600 dark:text-church-300 mb-5" aria-hidden="true" />
                  <p className="text-xs font-semibold uppercase text-church-500 dark:text-church-300 mb-2">{devotional.date}</p>
                  <h3 className="text-xl font-bold text-church-800 dark:text-white mb-2 break-words">{devotional.title}</h3>
                  <p className="text-sm text-church-500 dark:text-church-400 mb-5">by {devotional.author}</p>
                  <p className="text-church-600 dark:text-white mb-6 leading-relaxed flex-1">{devotional.excerpt}</p>
                  <a
                    href={devotional.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center self-start gap-2 text-church-800 dark:text-white font-semibold hover:text-cta transition-colors border-b-2 border-church-800 dark:border-white hover:border-cta pb-1"
                  >
                    Read Full Devotional
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto bg-background dark:bg-church-900/50 rounded-lg p-8">
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
