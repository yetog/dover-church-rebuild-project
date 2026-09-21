import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    category: 'Worship',
    title: 'Sunday Worship Celebration!',
    datetime: 'Sundays',
    time: '10:00 AM',
  },
  {
    id: 4,
    category: 'SPIRITUALITY',
    title: 'Meditation',
    datetime: 'Third Wednesdays',
    time: '10:30 AM',
  },
  {
    id: 2,
    category: 'BIBLICAL LITERACY',
    title: 'Bible Study',
    datetime: 'Thursdays',
    time: '1 PM',
  },
  {
    id: 3,
    category: 'BIBLICAL LITRACY',
    title: 'Bible Study',
    datetime: 'Thursdays',
    time: '6:00 PM',
  },
];

const NewsSection = () => {
  return (
    <section className="section-padding bg-gray-300 dark:bg-[#0f0a10]">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
              What's Happening
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white">
              At People's Church
            </h2>
          </div>
          <Link
            to="/happening"
            className="mt-4 md:mt-0 inline-flex items-center text-sm font-semibold text-church-600 dark:text-church-300 hover:text-cta transition-colors"
          >
            View all events <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="space-y-0 divide-y divide-church-200 dark:divide-church-700">
          {events.map(event => (
            <article
              key={event.id}
              className="py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 group cursor-pointer hover:bg-church-100 dark:hover:bg-church-800/30 -mx-4 px-4 transition-colors"
            >
              <div className="flex items-center gap-4 md:w-48">
                <Calendar className="w-5 h-5 text-church-400 dark:text-church-500" />
                <div>
                  <p className="text-sm font-medium text-church-800 dark:text-white">{event.datetime}</p>
                  <p className="text-sm text-church-500 dark:text-church-400">{event.time}</p>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-church-500 dark:text-church-400">
                  {event.category}
                </span>
                <h3 className="text-lg font-bold text-church-800 dark:text-white group-hover:text-church-600 dark:group-hover:text-church-300 transition-colors">
                  {event.title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-church-300 dark:text-church-600 group-hover:text-church-600 dark:group-hover:text-white group-hover:translate-x-1 transition-all hidden md:block" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
