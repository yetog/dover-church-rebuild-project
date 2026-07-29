import React from 'react';
import churchHero from "@/assets/banners/who-we-are.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative min-h-[60vh] bg-cover bg-center flex items-end"
      style={{ backgroundImage: `url(${churchHero})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 w-full container-max pb-12 px-4">
        <div className="max-w-[450px]">
          <p className="text-white text-lg md:text-xl font-heading font-bold mb-4 drop-shadow">
            The People's Church of Dover is an Open and Affirming Congregation.
          </p>
          <button className="button-solid bg-church-600 text-white hover:bg-church-700">
            Plan Your Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
