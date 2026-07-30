import React from 'react';
import { Link } from 'react-router-dom';
import churchHero from "@/assets/stock/worship-hands.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative min-h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${churchHero})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <p className="text-white/80 text-sm uppercase tracking-[0.2em] mb-4 font-medium">
          Open and Affirming · United Church of Christ
        </p>
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight mb-6">
          A welcoming church in Dover, Delaware
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Join us Sundays at 10:00 AM for worship, fellowship, and community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/about" className="px-8 py-3 bg-white text-church-800 font-semibold rounded hover:bg-gray-100 transition-colors">
            Plan Your Visit
          </Link>
          <Link to="/sermons" className="px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white/10 transition-colors">
            Watch Online
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
