import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import AboutSection from '@/components/AboutSection';
import OurChurchSection from '@/components/OurChurchSection';
import WhatToExpectSection from '@/components/WhatToExpectSection';
import PastorSection from '@/components/PastorSection';
import ChurchHistorySection from '@/components/ChurchHistorySection';
import AboutLinksSection from '@/components/AboutLinksSection';
import aboutBanner from '@/assets/photos/Visit.jpg';

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
    }
  }, [hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="About Us"
        subtitle={`The People's Church of Dover is an Open and Affirming Congregation of the United Church of Christ.\n\nWhoever you are, whatever you have done, whatever you believe, \nand wherever you are on life's journey, you are welcome here.`}
        breadcrumb={[{ label: 'About', href: '/about' }]}
        image={aboutBanner}
        imageAlt="The sanctuary of People's Church of Dover"
      />
      <main className="flex-1">
        <AboutLinksSection />
        <AboutSection />
        <OurChurchSection />
        <WhatToExpectSection />
        <PastorSection />
        <ChurchHistorySection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
