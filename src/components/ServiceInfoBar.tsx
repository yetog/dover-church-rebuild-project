import React from 'react';
import { MapPin, Clock, Radio } from 'lucide-react';

const ServiceInfoBar = () => {
  return (
    <section className="bg-church-900 dark:bg-[#0a0608] py-5 px-4 border-b border-church-800">
      <div className="container-max flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm">
        <div className="flex items-center gap-3 text-white">
          <Clock className="h-4 w-4 text-cta" />
          <span>
            <span className="font-semibold">Sunday Worship</span>
            <span className="text-white/60 ml-2">10:00 AM</span>
          </span>
        </div>
        <div className="hidden md:block w-px h-5 bg-white/20" />
        <div className="flex items-center gap-3 text-white/70">
          <MapPin className="h-4 w-4 text-white/50" />
          <span>46 South Bradford, Dover, DE 19904</span>
        </div>
        <div className="hidden md:block w-px h-5 bg-white/20" />
        <a
          href="https://www.youtube.com/@PeoplesChurchOfDover"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-cta hover:text-white transition-colors font-medium"
        >
          <Radio className="h-4 w-4" />
          <span>Watch Live</span>
        </a>
      </div>
    </section>
  );
};

export default ServiceInfoBar;
