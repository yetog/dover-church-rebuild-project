import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Play, Radio, Youtube } from 'lucide-react';
import watchBanner from '@/assets/photos/Watch.jpg';
import WhatToExpectSection from '@/components/WhatToExpectSection';
import { VIDEO_CHANNEL_URL, EMBED_PLAYLISTS } from '@/lib/videoLinks';

const watchLinks = [
  { label: 'Watch Live', href: VIDEO_CHANNEL_URL, icon: Radio, primary: true },
  { label: 'Previous Sermons', href: VIDEO_CHANNEL_URL, icon: Play, primary: false },
  { label: 'Full Worship Services', href: VIDEO_CHANNEL_URL, icon: Youtube, primary: false },
];

const Sermons = () => {
  const [active, setActive] = useState(EMBED_PLAYLISTS[0].id);
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
        <WhatToExpectSection />

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
            <p className="text-lg text-church-600 dark:text-white mb-6">Press play to watch here, or use the playlist menu in the player to pick a service.</p>
            <div className="flex flex-wrap gap-2 mb-6" role="tablist">
              {EMBED_PLAYLISTS.map((p) => (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={active === p.id}
                  onClick={() => setActive(p.id)}
                  className={`px-5 py-2 rounded font-semibold transition-colors ${
                    active === p.id
                      ? 'bg-church-800 text-white'
                      : 'bg-white text-church-800 border border-church-200 hover:bg-church-100'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black mb-8">
              <iframe
                key={active}
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/videoseries?list=${active}`}
                title="People's Church of Dover video playlist"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <a href={VIDEO_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-church-800 dark:text-white font-semibold border-b-2 border-church-800 hover:text-cta hover:border-cta pb-1"><Play className="w-5 h-5" /> See All Playlists on YouTube</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sermons;
