import React from 'react';
import { MapPin, Clock, Youtube } from 'lucide-react';

const ServiceInfoBar = () => {
  return (
    <section className="bg-church-600 py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-4 text-white text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 flex-shrink-0 text-cta" />
          <span>46 South Bradford, Dover, Delaware 19904</span>
        </div>
        <div className="hidden sm:block w-px h-8 bg-white/20" />
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 flex-shrink-0 text-cta" />
          <span>Every Sunday at 10:00 AM</span>
        </div>
        <div className="hidden sm:block w-px h-8 bg-white/20" />
        <a
          href="https://www.youtube.com/@PeoplesChurchOfDover"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-cta transition-colors font-medium"
        >
          <Youtube className="h-5 w-5 flex-shrink-0 text-cta" />
          <span>Watch on YouTube</span>
        </a>
      </div>
    </section>
  );
};

export default ServiceInfoBar;
