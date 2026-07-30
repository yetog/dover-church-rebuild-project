import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import NewsletterSection from '@/components/NewsletterSection';

const Newsletter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Newsletter"
        subtitle="Stay connected with the latest news and updates from our church."
        breadcrumb={[{ label: 'Newsletter', href: '/newsletter' }]}
      />
      <main className="flex-1">
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Newsletter;