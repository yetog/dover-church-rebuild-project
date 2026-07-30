import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

const PrayerInvitationSection = () => {
  return (
    <section className="py-20 md:py-28 px-4 bg-church-50 dark:bg-[#1a0a17]">
      <div className="container-max">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cta/10 mb-6">
            <Mail className="w-7 h-7 text-cta" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-4">
            Seeking Prayer or Counsel?
          </h2>
          <p className="text-lg text-church-600 dark:text-white/70 mb-8 leading-relaxed">
            We welcome all who seek prayer, guidance, or simply someone to talk to.
            Our community is here for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded hover:bg-cta/90 transition-colors"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrayerInvitationSection;
