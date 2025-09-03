import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SermonSection from '@/components/SermonSection';

const Sermons = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <SermonSection />
      </main>
      <Footer />
    </div>
  );
};

export default Sermons;