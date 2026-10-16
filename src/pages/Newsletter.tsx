import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import newsletterBanner from '@/assets/stock/choir.jpg';
import NewsletterSection from '@/components/NewsletterSection';

const Newsletter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Newsletter"
        subtitle="Stay connected with the latest news and updates from our church."
        breadcrumb={[{ label: 'Newsletter', href: '/newsletter' }]}
        image={newsletterBanner}
        imageAlt="Church choir singing"
      />
      <main className="flex-1">
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Newsletter;