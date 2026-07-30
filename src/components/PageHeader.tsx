import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
}

const PageHeader = ({ title, subtitle, breadcrumb }: PageHeaderProps) => {
  return (
    <section className="bg-church-900 dark:bg-[#0a0608] py-16 md:py-24 px-4">
      <div className="container-max">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumb.map((item, index) => (
              <React.Fragment key={item.href}>
                <ChevronRight className="w-4 h-4" />
                {index === breadcrumb.length - 1 ? (
                  <span className="text-white/80">{item.label}</span>
                ) : (
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/70 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
