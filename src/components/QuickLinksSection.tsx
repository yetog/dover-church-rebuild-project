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
    <section className="bg-church-600 py-6 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {links.map(({ label, href, icon: Icon }) => (
          <Link
            key={href}
            to={href}
            className="bg-white rounded-lg p-4 flex flex-col items-center gap-2 text-center shadow hover:shadow-md hover:-translate-y-0.5 transition-all group"
          >
            <Icon className="h-7 w-7 text-church-600 group-hover:text-cta transition-colors" />
            <span className="text-church-800 font-heading font-bold text-sm leading-tight">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default QuickLinksSection;
