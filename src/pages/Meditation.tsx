import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import MeditationSection from '@/components/MeditationSection';

const Meditation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Daily Devotional"
        subtitle="Scripture, meditation, and prayer for your daily spiritual journey."
        breadcrumb={[{ label: 'Devotional', href: '/meditation' }]}
      />
      <main className="flex-1">
        <MeditationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Meditation;