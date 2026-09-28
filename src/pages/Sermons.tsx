import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Play, Radio, Youtube } from 'lucide-react';
import watchBanner from '@/assets/photos/Watch.jpg';
import WhatToExpectSection from '@/components/WhatToExpectSection';

const YOUTUBE_CHANNEL = 'https://www.youtube.com/@PeoplesChurchDover';

const watchLinks = [
  { label: 'Watch Live', href: `${YOUTUBE_CHANNEL}/streams`, icon: Radio, primary: true },
  { label: 'Previous Sermons', href: `${YOUTUBE_CHANNEL}/playlists`, icon: Play, primary: false },
  { label: 'Full Worship Services', href: `${YOUTUBE_CHANNEL}/videos`, icon: Youtube, primary: false },
];

const Sermons = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Watch"
        subtitle="Join us for worship online through our live stream or watch past sermons."
        breadcrumb={[{ label: 'Watch', href: '/sermons' }]}
        image={watchBanner}
        imageAlt="Sunday worship at People's Church of Dover"
      />
      <main className="flex-1">
        {/* Live Stream Banner */}
        <section className="bg-church-900 dark:bg-[#0a0608] py-8 px-4">
          <div className="container-max">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cta/20 flex items-center justify-center">
                  <Radio className="w-6 h-6 text-cta" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Live Every Sunday</h2>
                  <p className="text-white">Join us at 10:00 AM EST</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {watchLinks.map(({ label, href, icon: Icon, primary }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 font-semibold rounded transition-colors ${
                      primary
                        ? 'bg-cta text-white hover:bg-cta/90'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-church-50 dark:bg-[#1a0a17]">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-4">Watch Past Services</h2>
            <p className="text-lg text-church-600 dark:text-white mb-8">Browse recent services and sermons on our YouTube channel.</p>
            <a href={`${YOUTUBE_CHANNEL}/videos`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-church-800 dark:text-white font-semibold border-b-2 border-church-800 hover:text-cta hover:border-cta pb-1"><Play className="w-5 h-5" /> Browse Videos on YouTube</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sermons;
