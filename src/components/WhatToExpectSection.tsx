import React from 'react';
import { Clock, Music, Users, Heart, Coffee, Accessibility } from 'lucide-react';

const expectations = [
  {
    icon: Clock,
    title: "Service Times",
    description: "Sunday worship begins at 10:00 AM and lasts about an hour. Come as you are.",
  },
  {
    icon: Music,
    title: "Worship Style",
    description: "Traditional hymns blended with contemporary elements. Our choir leads congregational singing.",
  },
  {
    icon: Users,
    title: "All Are Welcome",
    description: "We are an Open and Affirming congregation. Everyone is welcome at God's table.",
  },
  {
    icon: Heart,
    title: "Communion",
    description: "We celebrate open communion on the first Sunday of each month. All are invited to participate.",
  },
  {
    icon: Coffee,
    title: "Fellowship",
    description: "Join us after service for coffee hour in the fellowship hall. A great time to connect.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description: "Our building is wheelchair accessible with hearing assistance devices available.",
  },
];

const WhatToExpectSection = () => {
  return (
    <section className="section-padding bg-white dark:bg-[#1a0a17]">
      <div className="container-max">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
            First Time?
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-4">
            What to Expect
          </h2>
          <p className="text-lg text-church-600 dark:text-white/70">
            Whether you're exploring faith for the first time or looking for a new church home, we're glad you're here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expectations.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-church-100 dark:bg-church-800 flex items-center justify-center">
                <Icon className="w-5 h-5 text-church-600 dark:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-church-800 dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-church-600 dark:text-white/60 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatToExpectSection;
