import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ourChurchImg from '@/assets/photos/Our_Church.jpg';
import stainedGlassImg from '@/assets/photos/Who_we_are.jpg';
import servingImg from '@/assets/photos/Serving_our_Neighbors.jpg';
import sanctuaryImg from '@/assets/photos/Visit.jpg';

const sections = [
  {
    title: 'Our Church',
    description: 'Our story, our worship, and what to expect when you visit us in downtown Dover.',
    href: '/about#our-church',
    image: ourChurchImg,
  },
  {
    title: 'United Church of Christ',
    description: 'What it means to be an Open and Affirming congregation of the UCC.',
    href: '/ucc',
    image: stainedGlassImg,
  },
  {
    title: 'Staff & Leaders',
    description: 'Meet our pastor, staff, and the lay leaders who guide our congregation.',
    href: '/about#staff',
    image: sanctuaryImg,
  },
  {
    title: 'Partners',
    description: 'The organizations and ministries we serve alongside in our community.',
    href: '/partners',
    image: servingImg,
  },
];

const AboutLinksSection = () => {
  return (
    <section className="section-padding bg-gray-300 dark:bg-[#0f0a10]">
      <div className="container-max">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
            Explore
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white">
            Get to Know Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map(({ title, description, href, image }) => (
            <Link
              key={title}
              to={href}
              onClick={(e) => {
                const [path, hash] = href.split('#');
                if (hash && window.location.pathname.endsWith(path)) {
                  e.preventDefault();
                  document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group block bg-church-50 dark:bg-church-800/40 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-church-800 dark:text-white mb-2 group-hover:text-church-600 dark:group-hover:text-church-300 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-church-600 dark:text-white/60 leading-relaxed mb-3">
                  {description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-church-600 dark:text-church-300 group-hover:text-cta transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutLinksSection;
