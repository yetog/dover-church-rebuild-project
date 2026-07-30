import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServiceInfoBar from '@/components/ServiceInfoBar';
import AboutSection from '@/components/AboutSection';
import CommunitySection from '@/components/CommunitySection';
import NewsSection from '@/components/NewsSection';
import SermonSection from '@/components/SermonSection';
import RomeroQuoteSection from '@/components/RomeroQuoteSection';
import PrayerInvitationSection from '@/components/PrayerInvitationSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <ServiceInfoBar />
        <AboutSection />
        <CommunitySection />
        <SermonSection />
        <NewsSection />
        <RomeroQuoteSection />
        <PrayerInvitationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
