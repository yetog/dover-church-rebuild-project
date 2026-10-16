import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import OurChurchSection from '@/components/OurChurchSection';
import PastorSection from '@/components/PastorSection';
import StaffSection from '@/components/StaffSection';
import ChurchHistorySection from '@/components/ChurchHistorySection';
import AboutLinksSection from '@/components/AboutLinksSection';
import aboutBanner from '@/assets/photos/Visit.jpg';
import { VIDEO_CHANNEL_URL } from '@/lib/videoLinks';

const jumpLinks = [
  { label: 'Our Church', hash: 'our-church' },
  { label: 'Beliefs', hash: 'beliefs' },
  { label: 'Our Pastor', hash: 'pastor' },
  { label: 'Staff & Trustees', hash: 'staff' },
  { label: 'History', hash: 'history' },
];

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
    }
  }, [hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="About Us"
        subtitle={`The People's Church of Dover is an Open and Affirming Congregation of the United Church of Christ.\n\nWhoever you are, whatever you have done, whatever you believe, \nand wherever you are on life's journey, you are welcome here.`}
        breadcrumb={[{ label: 'About', href: '/about' }]}
        image={aboutBanner}
        imageAlt="The sanctuary of People's Church of Dover"
      />
      <nav aria-label="On this page" className="sticky top-16 z-30 bg-church-900/95 dark:bg-[#0a0608]/95 backdrop-blur border-b border-church-700">
        <div className="container-max px-4 flex gap-1 overflow-x-auto">
          {jumpLinks.map((l) => (
            <Link
              key={l.hash}
              to={`/about#${l.hash}`}
              className="whitespace-nowrap px-4 py-3 text-sm font-semibold text-white/80 hover:text-white border-b-2 border-transparent hover:border-amber-400 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
      <main className="flex-1">
        <AboutLinksSection />
        <OurChurchSection />
        <PastorSection />
        <StaffSection />
        <ChurchHistorySection />

        <section className="py-16 px-4 bg-church-900 dark:bg-[#0a0608]">
          <div className="container-max text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3">Visit Us Sunday at 10 AM</h2>
            <p className="text-white/90 mb-8">46 South Bradford Street · Dover, Delaware</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded hover:bg-cta/90 transition-colors">
                Plan a Visit
              </Link>
              <a href={VIDEO_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded hover:bg-white/20 transition-colors">
                <Play className="w-4 h-4" /> Watch Online
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
