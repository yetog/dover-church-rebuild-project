import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PrayerInvitationSection = () => {
  return (
    <section className="section-padding bg-cta-light dark:bg-[#2d1429]">
      <div className="container-max">
        <h2 className="section-title dark:text-white">
          Seeking Prayer or Counsel?
        </h2>
        <p className="text-church-700 dark:text-[#ede5f0] text-lg leading-relaxed mb-8 max-w-3xl">
          We welcome all who seek prayer, guidance, or simply someone to talk to.
          Reach out to us — our community is here for you.
        </p>
        <Button asChild className="button-solid bg-cta hover:bg-cta-hover text-white transition-colors duration-200">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
};

export default PrayerInvitationSection;
