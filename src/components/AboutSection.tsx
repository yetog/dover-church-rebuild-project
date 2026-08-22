import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Globe, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: "Community",
    description: "Building meaningful connections through worship and service",
  },
  {
    icon: Heart,
    title: "Faith",
    description: "Growing spiritually through worship, prayer, and study",
  },
  {
    icon: Globe,
    title: "Service",
    description: "Reaching out to our neighbors with love and compassion",
  },
];

const AboutSection = () => {
  return (
    <section id="who-we-are" className="section-padding bg-gray-300 dark:bg-[#0f0a10]">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-6">
              Who We Are
            </h2>

            <blockquote className="border-l-4 border-church-600 pl-6 my-8">
              <p className="text-xl md:text-2xl italic text-church-700 dark:text-white/90 mb-3">
                "Don't place a period where God has placed a comma."
              </p>
              <cite className="text-sm text-church-500 dark:text-church-400 not-italic">
                — Gracie Allen
              </cite>
            </blockquote>

            <p className="text-lg text-church-600 dark:text-white/70 mb-6 leading-relaxed">
              The People's Church of Dover is an Open and Affirming Congregation of the United Church of Christ. We believe in extravagant welcome and that God calls us to love one another with no exceptions.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center text-sm font-semibold text-church-600 dark:text-church-300 hover:text-cta transition-colors"
            >
              Learn more about us <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Right: Values */}
          <div className="space-y-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-church-100 dark:bg-church-800 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-church-600 dark:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-church-800 dark:text-white mb-1">
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
      </div>
    </section>
  );
};

export default AboutSection;
