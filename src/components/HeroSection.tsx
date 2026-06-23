import React from 'react';
import churchHero from "@/assets/banners/who-we-are.jpg";
import churchLogo from "@/assets/logo/church-logo.png";

const HeroSection = () => {
  return (
    <div
      className="relative min-h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${churchHero})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <img
          src={churchLogo}
          alt="People's Church of Dover"
          className="h-32 md:h-40 w-auto mb-6 drop-shadow-lg"
        />
        <div className="text-xs font-bold uppercase tracking-widest text-church-200 dark:text-[#d4b5ce] mb-2">
          People's Church of Dover
        </div>
        <p className="text-white text-xl md:text-2xl font-heading font-bold max-w-2xl drop-shadow mb-4">
          The People's Church of Dover is an Open and Affirming Congregation.
        </p>
        <div className="inline-block bg-cta text-white text-xs font-bold uppercase tracking-wide px-4 py-1 rounded-full">
          Open & Affirming
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
