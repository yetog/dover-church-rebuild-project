
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SermonSection from '@/components/SermonSection';
import MeditationSection from '@/components/MeditationSection';
import CommunitySection from '@/components/CommunitySection';
import NewsletterSection from '@/components/NewsletterSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SermonSection />
        <MeditationSection />
        <CommunitySection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
