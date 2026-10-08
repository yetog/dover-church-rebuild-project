import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useUccDevotional } from '@/hooks/useUccDevotional';

const HomeDevotionalCard = () => {
  const { devotionals, loading } = useUccDevotional();
  const devotional = devotionals[0];

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
            <div className="h-40 bg-church-100 dark:bg-church-800 rounded-lg animate-pulse" aria-label="Loading devotional" />
          ) : devotional ? (
            <article className="bg-background dark:bg-church-900/50 border border-border rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 text-left">
              <BookOpen className="w-10 h-10 shrink-0 text-church-600 dark:text-church-300" aria-hidden="true" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase text-church-500 dark:text-church-300 mb-1">{devotional.date}</p>
                <h3 className="text-2xl font-bold text-church-800 dark:text-white mb-1 break-words">{devotional.title}</h3>
                <p className="text-sm text-church-500 dark:text-church-400 mb-3">by {devotional.author}</p>
                <p className="text-church-600 dark:text-white leading-relaxed">{devotional.excerpt}</p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a
                  href={devotional.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-church-800 text-white px-5 py-2.5 font-semibold hover:bg-church-700 transition-colors"
                >
                  Read Full Devotion
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  to="/meditation"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-church-800 dark:border-white text-church-800 dark:text-white px-5 py-2.5 font-semibold hover:text-cta hover:border-cta transition-colors"
                >
                  Meditation &amp; Prayer
                </Link>
              </div>
            </article>
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

export default HomeDevotionalCard;
