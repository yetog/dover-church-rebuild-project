import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MeditationSection from '@/components/MeditationSection';

const Meditation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <MeditationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Meditation;