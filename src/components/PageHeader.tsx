import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
  image?: string;
  imageAlt?: string;
  className?: string;
}

const PageHeader = ({ title, subtitle, breadcrumb, image, imageAlt, className }: PageHeaderProps) => {
  return (
    <section className={`relative bg-church-800 dark:bg-[#0a0608] min-h-[300px] md:min-h-[380px] flex items-end py-12 md:py-20 px-4 overflow-hidden${className ? ` ${className}` : ''}`}>
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt={imageAlt ?? ''}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-church-900/95 via-church-900/70 to-church-900/40 dark:from-[#0a0608] dark:via-[#0a0608]/80 dark:to-[#0a0608]/50" />
        </div>
      )}
      <div className="relative container-max w-full">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-white/70 mb-5">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumb.map((item, index) => (
              <span key={item.href} className="contents">
                <ChevronRight className="w-3 h-3" />
                {index === breadcrumb.length - 1 ? (
                  <span className="text-white/90">{item.label}</span>
                ) : (
                  <Link to={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}
        <span className="block w-12 h-1 bg-amber-400 rounded-full mb-5" aria-hidden="true" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-white/90 max-w-2xl whitespace-pre-line">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
