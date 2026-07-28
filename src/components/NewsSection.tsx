import React from 'react';

const events = [
  {
    id: 1,
    time: '10:00\nAM',
    title: 'Sunday Worship Service',
    datetime: 'Every Sunday, 10:00 AM',
  },
  {
    id: 2,
    time: '6:00\nPM',
    title: 'Youth Group Meeting',
    datetime: 'Wednesdays, 6:00 PM',
  },
  {
    id: 3,
    time: '9:00\nAM',
    title: 'Prayer Breakfast',
    datetime: 'Second Saturday, 9:00 AM',
  },
  {
    id: 4,
    time: '7:30\nPM',
    title: 'Evening Bible Study',
    datetime: 'Thursday, 7:30 PM',
  },
];

const NewsSection = () => {
  return (
    <section className="section-padding bg-white dark:bg-[#1a0a17]">
      <div className="container-max">
        {/* Centered heading - "What's Happening" */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-church-600 dark:text-white mb-12 uppercase tracking-tight">
          What's Happening
        </h2>

        {/* Event cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {events.map(event => (
            <article
              key={event.id}
              className="flex items-start gap-6 pb-6 border-b border-gray-200 dark:border-[#5A2653] last:border-b-0"
            >
              {/* Circular time badge */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full border-[2.67px] border-[#E29032] flex items-center justify-center bg-transparent dark:bg-[#422F3C] dark:border-[#E29032]">
                <div className="text-center text-sm font-bold text-church-600 dark:text-white leading-tight whitespace-pre-line">
                  {event.time}
                </div>
              </div>

              {/* Event text content */}
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-bold uppercase text-[#5A2653] dark:text-white mb-1">
                  {event.title}
                </h3>
                <p className="text-[1.125rem] text-[#183640] dark:text-[#b885aa]">
                  {event.datetime}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
