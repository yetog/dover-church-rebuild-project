import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Mail, Building2, Heart } from 'lucide-react';

const links = [
  { label: 'About Us', href: '/about', icon: Users },
  { label: 'Contact Us', href: '/contact', icon: Mail },
  { label: "People's Community Center", href: '/community', icon: Building2 },
  { label: 'Prayer List', href: '/meditation', icon: Heart },
];

const QuickLinksSection = () => {
  return (
    <section className="section-padding bg-church-600 dark:bg-[#2d1429]">
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {links.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              to={href}
              className="button-solid normal-case bg-white dark:bg-[#422F3C] text-church-600 dark:text-[#b885aa] hover:bg-church-50 dark:hover:bg-[#5a3d52] transition-all flex flex-col items-center justify-center gap-2 py-6 rounded-md shadow hover:shadow-md hover:-translate-y-0.5"
            >
              <Icon className="h-7 w-7" />
              <span className="text-sm leading-tight font-heading font-bold">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
