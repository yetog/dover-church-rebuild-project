import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import heroImage from '@/assets/hero-sanctuary.jpg';

const HeroSection = () => {
  return (
    <section className="bg-church-700 dark:bg-[#0a0608]">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          {/* Left: Service Announcement */}
          <div className="flex flex-col justify-center py-16 lg:py-24 px-4 lg:pr-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50 mb-6">
              Sunday Morning Worship
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Welcome to<br />
              People's Church
            </h1>

            <p className="text-lg text-white/70 mb-8 max-w-md">
              A welcoming, Open and Affirming congregation of the United Church of Christ
              in downtown Dover, Delaware.
            </p>

            {/* Service Time Card */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-8 max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-cta mb-2">
                Join Us This Sunday
              </p>
              <p className="text-2xl font-bold text-white mb-1">
                10:00 AM
              </p>
              <p className="text-white/60 text-sm">
                46 South Bradford Street · Dover, DE
              </p>
            </div>

            {/* CTAs - More subtle, TRC-style */}
            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="/about"
                className="text-white font-semibold hover:text-cta transition-colors border-b-2 border-white hover:border-cta pb-1"
              >
                Plan Your Visit
              </Link>
              <a
                href="https://www.youtube.com/@PeoplesChurchDover"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Play className="w-4 h-4" />
                Watch Live
              </a>
            </div>
          </div>

          {/* Right: Featured Image/Video Area */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-church-900 dark:from-[#0a0608] to-transparent z-10 w-24" />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${heroImage}')`,
              }}
            />
            <div className="absolute inset-0 bg-church-900/30 dark:bg-[#0a0608]/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
