import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'About', href: '/about' },
  { label: 'Community', href: '/community/children-youth' },
  { label: 'Events', href: '/happening' },
  { label: 'Contact', href: '/contact' },
];

const QuickLinksSection = () => {
  return (
    <section className="py-6 bg-church-800 dark:bg-[#1a0a17] border-b border-church-700">
      <div className="container-max">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className="text-white/80 hover:text-white text-sm uppercase tracking-widest font-medium transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
