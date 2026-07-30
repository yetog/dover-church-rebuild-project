import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import AboutSection from '@/components/AboutSection';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="About Us"
        subtitle="The People's Church of Dover is an Open and Affirming Congregation of the United Church of Christ."
        breadcrumb={[{ label: 'About', href: '/about' }]}
      />
      <main className="flex-1">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;