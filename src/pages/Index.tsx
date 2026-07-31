import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CommunitySection from '@/components/CommunitySection';
import NewsSection from '@/components/NewsSection';
import SermonSection from '@/components/SermonSection';
import DailyDevotionalSection from '@/components/DailyDevotionalSection';
import { Mail } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <NewsSection />
        <CommunitySection />
        <SermonSection />
        <DailyDevotionalSection />

        {/* Simple Contact CTA - TRC style */}
        <section className="py-16 px-4 bg-church-50 dark:bg-[#0f0a10]">
          <div className="container-max text-center">
            <h2 className="text-2xl md:text-3xl font-black text-church-800 dark:text-white mb-4">
              Questions? We'd love to hear from you.
            </h2>
            <p className="text-church-600 dark:text-white/60 mb-6 max-w-md mx-auto">
              Whether you're planning a visit or just want to learn more, reach out anytime.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-church-800 dark:text-white font-semibold hover:text-cta transition-colors border-b-2 border-church-800 dark:border-white hover:border-cta pb-1"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
