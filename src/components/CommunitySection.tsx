import React from 'react';
import { Users, Heart, Activity, ArrowRight, ExternalLink } from 'lucide-react';
import servingImg from '@/assets/photos/Serving_our_Neighbors.jpg';

const ministryCenters = [
  {
    id: 1,
    title: "Center for Children & Youth",
    description: "Programs supporting the education, mentorship, and development of young people in our community.",
    href: "https://pcc-dover.org",
    icon: Users,
  },
  {
    id: 2,
    title: "Center for Neighbors in Need",
    description: "Serving homeless persons and families with food assistance, clothing, and essential life services.",
    href: "https://pcc-dover.org",
    icon: Heart,
  },
  {
    id: 3,
    title: "Center for Workforce Development",
    description: "Job readiness training, skills workshops, and employment support for neighbors seeking meaningful work.",
    href: "https://pcc-dover.org",
    icon: Activity,
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="section-padding bg-church-50 dark:bg-[#1a0a17]">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
              People's Community Center
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-4">
              Serving Our Neighbors
            </h2>
            <p className="text-lg text-church-600 dark:text-white/70">
              Through the People's Community Center, we extend God's love beyond our walls with
              three ministry centers dedicated to those in need in downtown Dover.
            </p>
          </div>
          <img
            src={servingImg}
            alt="Volunteers preparing meals in the People's Community Center kitchen"
            loading="lazy"
            className="w-full rounded-lg shadow-lg object-cover aspect-[3/2]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {ministryCenters.map(({ id, title, description, href, icon: Icon }) => (
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
                  <p className="text-church-600 dark:text-white/60 text-sm leading-relaxed mb-3 whitespace-pre-wrap">
                    {description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-church-600 dark:text-church-300 group-hover:text-cta transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-church-100 dark:border-church-800 text-center">
          <p className="text-church-600 dark:text-white/60 mb-6 max-w-2xl mx-auto">
            The People's Community Center is transforming our 115-year-old building into a hub
            for those less fortunate in the downtown Dover area.
          </p>
          <a
            href="https://pcc-dover.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-church-600 text-white text-base md:text-lg font-bold rounded-md shadow-md hover:bg-church-700 transition-colors"
          >
            Visit the People's Community Center
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
