import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SermonSection from '@/components/SermonSection';

const Sermons = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Watch"
        subtitle="Join us for worship online through our live stream or watch past sermons."
        breadcrumb={[{ label: 'Watch', href: '/sermons' }]}
      />
      <main className="flex-1">
        <SermonSection />
      </main>
      <Footer />
    </div>
  );
};

export default Sermons;