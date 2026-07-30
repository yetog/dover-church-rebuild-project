import React from 'react';
import { Users, Heart, Activity, ArrowRight, ExternalLink } from 'lucide-react';

const communityPrograms = [
  {
    id: 1,
    title: "Children & Youth",
    description: "Education, mentorship, and support programs for young people in our community.",
    href: "https://pcc-dover.org/youth",
    icon: Users,
  },
  {
    id: 2,
    title: "Food Pantry",
    description: "Food assistance, clothing, and essential resources for families facing hardship.",
    href: "https://pcc-dover.org/food-pantry",
    icon: Heart,
  },
  {
    id: 3,
    title: "Community Programs",
    description: "Health education, counseling services, and wellness support groups.",
    href: "https://pcc-dover.org/programs",
    icon: Activity,
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="section-padding bg-white dark:bg-[#1a0a17]">
      <div className="container-max">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
            Our Programs
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-4">
            People's Community Center
          </h2>
          <p className="text-lg text-church-600 dark:text-white/70 mb-12">
            Serving our neighbors through outreach, education, and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {communityPrograms.map(({ id, title, description, href, icon: Icon }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-church-100 dark:bg-church-800 flex items-center justify-center group-hover:bg-church-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5 text-church-600 dark:text-white group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-church-800 dark:text-white mb-2 group-hover:text-church-600 dark:group-hover:text-church-300 transition-colors flex items-center gap-2">
                    {title}
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </h3>
                  <p className="text-church-600 dark:text-white/60 text-sm leading-relaxed mb-3">
                    {description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-church-600 dark:text-church-300 group-hover:text-cta transition-colors">
                    Visit PCC <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
