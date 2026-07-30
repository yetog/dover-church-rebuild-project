import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with questions, prayer requests, or just to say hello."
        breadcrumb={[{ label: 'Contact', href: '/contact' }]}
      />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;