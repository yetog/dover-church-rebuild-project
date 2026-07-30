import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Radio, ArrowRight } from 'lucide-react';

const recentSermons = [
  {
    id: 1,
    title: "Finding Peace in Uncertain Times",
    speaker: "Rev. Pastor",
    date: "April 28, 2025",
    duration: "32 min",
    videoUrl: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: 2,
    title: "The Power of Community",
    speaker: "Rev. Pastor",
    date: "April 21, 2025",
    duration: "28 min",
    videoUrl: "https://www.youtube.com/watch?v=example2"
  },
  {
    id: 3,
    title: "Walking in Faith",
    speaker: "Rev. Pastor",
    date: "April 14, 2025",
    duration: "35 min",
    videoUrl: "https://www.youtube.com/watch?v=example3"
  },
];

const SermonSection = () => {
  return (
    <section id="videos" className="section-padding bg-white dark:bg-[#1a0a17]">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: Live Stream CTA */}
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
              Watch
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-4">
              Worship With Us
            </h2>
            <p className="text-church-600 dark:text-white/70 mb-8">
              Join us for worship online through our live stream or watch past sermons.
            </p>

            <a
              href="https://www.youtube.com/@PeoplesChurchOfDover"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-church-800 dark:bg-church-700 text-white rounded hover:bg-church-700 dark:hover:bg-church-600 transition-colors group"
            >
              <Radio className="w-5 h-5" />
              <div className="text-left">
                <p className="font-semibold">Watch Live</p>
                <p className="text-sm text-white/70">Sundays at 10:00 AM</p>
              </div>
            </a>
          </div>

          {/* Right: Recent Sermons List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-church-500 dark:text-church-400">
                Recent Sermons
              </h3>
              <Link
                to="/sermons"
                className="text-sm font-semibold text-church-600 dark:text-church-300 hover:text-cta transition-colors flex items-center gap-1"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-0 divide-y divide-church-100 dark:divide-church-800">
              {recentSermons.map(sermon => (
                <a
                  key={sermon.id}
                  href={sermon.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-5 flex items-center gap-4 group hover:bg-church-50 dark:hover:bg-church-800/30 -mx-4 px-4 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-church-100 dark:bg-church-800 flex items-center justify-center group-hover:bg-cta group-hover:text-white transition-colors">
                    <Play className="w-5 h-5 text-church-600 dark:text-white group-hover:text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-church-800 dark:text-white group-hover:text-church-600 dark:group-hover:text-church-300 transition-colors truncate">
                      {sermon.title}
                    </h4>
                    <p className="text-sm text-church-500 dark:text-church-400">
                      {sermon.date} · {sermon.duration}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-church-300 dark:text-church-600 group-hover:text-church-600 dark:group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SermonSection;
