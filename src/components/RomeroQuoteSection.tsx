import React from 'react';

const RomeroQuoteSection = () => {
  return (
    <section className="bg-church-900 dark:bg-[#0a0608] py-20 md:py-28 px-4">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-10 h-10 text-church-600 mx-auto mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-white text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 font-light">
            A church that doesn't provoke any crises, a gospel that doesn't unsettle,
            a word of God that doesn't get under anyone's skin — what gospel is that?
          </blockquote>
          <cite className="text-church-400 text-sm not-italic font-semibold uppercase tracking-widest">
            Saint Oscar Romero
          </cite>
        </div>
      </div>
    </section>
  );
};

export default RomeroQuoteSection;
