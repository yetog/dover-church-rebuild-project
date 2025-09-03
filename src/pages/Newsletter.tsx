import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/NewsletterSection';

const Newsletter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Newsletter;