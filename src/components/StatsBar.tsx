import React from 'react';

const StatsBar = () => {
  return (
    <section className="bg-white dark:bg-[#1a0a17] border-y border-gray-100 dark:border-white/10 py-10 px-4">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-12 md:gap-20">
        <div className="text-center">
          <div className="text-4xl font-black text-church-600 dark:text-white">1886</div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-church-400 dark:text-white/50 mt-2">
            Founded
          </div>
        </div>
        <div className="w-px h-12 bg-church-200 dark:bg-white/20" />
        <div className="text-center">
          <div className="text-4xl font-black text-church-600 dark:text-white">3</div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-church-400 dark:text-white/50 mt-2">
            Programs
          </div>
        </div>
        <div className="w-px h-12 bg-church-200 dark:bg-white/20" />
        <div className="text-center">
          <div className="text-4xl font-black text-cta">UCC</div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-church-400 dark:text-white/50 mt-2">
            Member
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
