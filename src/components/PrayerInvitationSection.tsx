import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PrayerInvitationSection = () => {
  return (
    <section className="bg-cta-light py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-church-800 mb-4">
          Seeking Prayer or Counsel?
        </h2>
        <p className="text-church-700 text-lg leading-relaxed mb-8">
          We welcome all who seek prayer, guidance, or simply someone to talk to.
          Reach out to us — our community is here for you.
        </p>
        <Button asChild className="bg-cta hover:bg-cta-hover text-white font-heading font-bold px-8 py-3 text-base">
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
};

export default PrayerInvitationSection;
