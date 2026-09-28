import React from 'react';
import { Radio, ArrowRight } from 'lucide-react';

const SermonSection = () => {
  return (
    <section id="videos" className="section-padding bg-gray-300 dark:bg-[#1a0a17]">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: Live Stream CTA */}
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
              Watch
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-4">
              Worship With Us
            </h2>
            <p className="text-church-600 dark:text-white mb-8">
              Join us for worship online through our live stream or watch past sermons.
            </p>

            <a
              href="https://www.youtube.com/@PeoplesChurchDover/streams"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-church-800 dark:text-white font-semibold hover:text-cta transition-colors border-b-2 border-church-800 dark:border-white hover:border-cta pb-1"
            >
              <Radio className="w-4 h-4" />
              Watch Live on YouTube
            </a>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-church-200 dark:border-church-800 pt-8 lg:pt-0 lg:pl-12">
            <h3 className="text-2xl font-bold text-church-800 dark:text-white mb-4">Recent Services</h3>
            <p className="text-church-600 dark:text-white mb-6">Find the latest worship services and messages on our YouTube channel.</p>
            <a href="https://www.youtube.com/@PeoplesChurchDover/videos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-church-800 dark:text-white font-semibold hover:text-cta transition-colors">Browse Videos <ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SermonSection;
