import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import QuickLinksSection from '@/components/QuickLinksSection';
import CommunitySection from '@/components/CommunitySection';
import AboutSection from '@/components/AboutSection';
import ServiceInfoBar from '@/components/ServiceInfoBar';
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
        <QuickLinksSection />
        <CommunitySection />
        <AboutSection />
        <ServiceInfoBar />
        <NewsSection />
        <SermonSection />
        <RomeroQuoteSection />
        <PrayerInvitationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
