import React from 'react';

const RomeroQuoteSection = () => {
  return (
    <section className="bg-church-800 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <blockquote className="italic text-white text-lg md:text-xl leading-relaxed mb-6">
          "A church that doesn't provoke any crises, a gospel that doesn't unsettle,
          a word of God that doesn't get under anyone's skin, a word of God that
          doesn't touch the real sin of the society in which it is being proclaimed —
          what gospel is that?"
        </blockquote>
        <cite className="text-church-200 text-sm not-italic font-heading font-bold tracking-wide">
          — Saint Oscar Romero
        </cite>
      </div>
    </section>
  );
};

export default RomeroQuoteSection;
