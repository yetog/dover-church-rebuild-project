import React from 'react';

const StatsBar = () => {
  return (
    <section className="bg-church-600 dark:bg-[#2d1429] py-6 px-4">
      <div className="max-w-5xl mx-auto flex items-center justify-around text-white">
        <div className="text-center">
          <div className="text-3xl font-black text-white">1886</div>
          <div className="text-xs font-bold uppercase tracking-widest text-church-200 dark:text-[#d4b5ce] mt-1">
            Founded
          </div>
        </div>
        <div className="hidden sm:block w-px h-8 bg-white/20" />
        <div className="text-center">
          <div className="text-3xl font-black text-white">3</div>
          <div className="text-xs font-bold uppercase tracking-widest text-church-200 dark:text-[#d4b5ce] mt-1">
            Programs
          </div>
        </div>
        <div className="hidden sm:block w-px h-8 bg-white/20" />
        <div className="text-center">
          <div className="text-3xl font-black text-cta">UCC</div>
          <div className="text-xs font-bold uppercase tracking-widest text-church-200 dark:text-[#d4b5ce] mt-1">
            Member
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
