import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Play, Radio, Calendar, Clock, Search, Youtube, Video } from 'lucide-react';
import { Input } from '@/components/ui/input';

const sermonArchive = [
  {
    id: 1,
    title: "[Sermon Title]",
    speaker: "[Pastor Name]",
    date: "July 27, 2025",
    duration: "32 min",
    series: "Summer Series",
    scripture: "Matthew 5:1-12",
    videoId: null, // Replace with YouTube video ID
  },
  {
    id: 2,
    title: "[Sermon Title]",
    speaker: "[Pastor Name]",
    date: "July 20, 2025",
    duration: "28 min",
    series: "Summer Series",
    scripture: "John 3:16-21",
    videoId: null,
  },
  {
    id: 3,
    title: "[Sermon Title]",
    speaker: "[Pastor Name]",
    date: "July 13, 2025",
    duration: "35 min",
    series: "Summer Series",
    scripture: "Psalm 23",
    videoId: null,
  },
  {
    id: 4,
    title: "[Sermon Title]",
    speaker: "[Pastor Name]",
    date: "July 6, 2025",
    duration: "30 min",
    series: "Summer Series",
    scripture: "Romans 8:28-39",
    videoId: null,
  },
  {
    id: 5,
    title: "[Sermon Title]",
    speaker: "[Guest Speaker]",
    date: "June 29, 2025",
    duration: "27 min",
    series: "Guest Sunday",
    scripture: "Isaiah 40:31",
    videoId: null,
  },
  {
    id: 6,
    title: "[Sermon Title]",
    speaker: "[Pastor Name]",
    date: "June 22, 2025",
    duration: "33 min",
    series: "Faith Foundations",
    scripture: "Hebrews 11:1-6",
    videoId: null,
  },
];

const Sermons = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Watch"
        subtitle="Join us for worship online through our live stream or watch past sermons."
        breadcrumb={[{ label: 'Watch', href: '/sermons' }]}
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
                  <p className="text-white/60">Join us at 10:00 AM EST</p>
                </div>
              </div>
              <a
                href="https://www.youtube.com/@PeoplesChurchOfDover"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded hover:bg-cta/90 transition-colors"
              >
                <Youtube className="w-5 h-5" />
                Watch on YouTube
              </a>
            </div>
          </div>
        </section>

        {/* Featured Sermon */}
        <section className="section-padding bg-white dark:bg-[#1a0a17]">
          <div className="container-max">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
                Latest Message
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white">
                This Week's Sermon
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Video Embed Placeholder */}
              <div className="lg:col-span-2">
                <div className="aspect-video bg-church-200 dark:bg-church-800 rounded-lg overflow-hidden flex items-center justify-center">
                  {/* PLACEHOLDER: Replace with actual YouTube embed */}
                  <div className="text-center p-8">
                    <Video className="w-16 h-16 mx-auto mb-4 text-church-400 dark:text-church-600" />
                    <p className="text-lg font-medium text-church-500 dark:text-church-400">
                      YouTube Video Embed
                    </p>
                    <p className="text-sm text-church-400 dark:text-church-500 mt-2">
                      Embed latest sermon video here
                    </p>
                    <p className="text-xs text-church-400 dark:text-church-500 mt-4 font-mono">
                      {`<iframe src="youtube.com/embed/VIDEO_ID" />`}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sermon Details */}
              <div className="lg:col-span-1">
                <div className="bg-church-50 dark:bg-church-800/30 rounded-lg p-6 h-full">
                  <span className="text-xs font-semibold text-cta uppercase tracking-widest">
                    [Series Name]
                  </span>
                  <h3 className="text-2xl font-bold text-church-800 dark:text-white mt-2 mb-4">
                    [Sermon Title]
                  </h3>
                  <div className="space-y-3 text-sm text-church-600 dark:text-white/60 mb-6">
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      [Date]
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      [Duration] minutes
                    </p>
                  </div>
                  <div className="border-t border-church-200 dark:border-church-700 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-church-400 dark:text-church-500 mb-2">
                      Scripture
                    </p>
                    <p className="text-church-800 dark:text-white font-medium">
                      [Scripture Reference]
                    </p>
                  </div>
                  <div className="border-t border-church-200 dark:border-church-700 pt-4 mt-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-church-400 dark:text-church-500 mb-2">
                      Speaker
                    </p>
                    <p className="text-church-800 dark:text-white font-medium">
                      [Pastor Name]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-church-400 dark:text-church-500 mt-6 italic">
              Replace placeholder with actual YouTube embed and sermon details
            </p>
          </div>
        </section>

        {/* Sermon Archive */}
        <section className="section-padding bg-church-50 dark:bg-[#0f0a10]">
          <div className="container-max">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
                  Archive
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white">
                  Past Sermons
                </h2>
              </div>
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-church-400" />
                <Input
                  placeholder="Search sermons..."
                  className="pl-10 bg-white dark:bg-church-800 border-church-200 dark:border-church-700"
                />
              </div>
            </div>

            <div className="space-y-0 divide-y divide-church-200 dark:divide-church-700 bg-white dark:bg-church-800/20 rounded-lg overflow-hidden">
              {sermonArchive.map((sermon) => (
                <article
                  key={sermon.id}
                  className="p-5 flex flex-col md:flex-row md:items-center gap-4 hover:bg-church-50 dark:hover:bg-church-800/40 transition-colors cursor-pointer group"
                >
                  {/* Thumbnail Placeholder */}
                  <div className="flex-shrink-0 w-full md:w-40 aspect-video bg-church-200 dark:bg-church-700 rounded flex items-center justify-center">
                    <Play className="w-8 h-8 text-church-400 dark:text-church-500 group-hover:text-cta transition-colors" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-cta">
                        {sermon.series}
                      </span>
                      <span className="text-church-300 dark:text-church-600">|</span>
                      <span className="text-xs text-church-500 dark:text-church-400">
                        {sermon.scripture}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-church-800 dark:text-white group-hover:text-church-600 dark:group-hover:text-church-300 transition-colors truncate">
                      {sermon.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-church-500 dark:text-church-400">
                      <span>{sermon.speaker}</span>
                      <span>{sermon.date}</span>
                      <span>{sermon.duration}</span>
                    </div>
                  </div>

                  {/* Play Button */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-church-100 dark:bg-church-700 flex items-center justify-center group-hover:bg-cta transition-colors">
                      <Play className="w-5 h-5 text-church-600 dark:text-white group-hover:text-white" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="text-center text-xs text-church-400 dark:text-church-500 mt-8 italic">
              6 sermon entries shown as placeholders - replace with actual sermon data and YouTube video IDs
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sermons;
