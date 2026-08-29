import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

// Import event images
import worshipImg from '@/assets/stock/event-worship.jpg';
import fellowshipImg from '@/assets/stock/fellowship.jpg';

type ChurchEvent = {
  id: string;
  title: string;
  event_date: string;
  event_time: string | null;
  location: string | null;
  category: string;
  description: string | null;
  featured: boolean;
};

const recurringEvents = [
  {
    id: 'r1',
    title: "Sunday Worship Service",
    category: "Worship",
    date: "Every Sunday",
    time: "10:00 AM",
    location: "Main Sanctuary",
    description: "Join us for our weekly worship service with music, prayer, and message.",
  },
  {
    id: 'r2',
    title: "Youth Group Meeting",
    category: "Youth",
    date: "Every Wednesday",
    time: "6:00 PM",
    location: "Fellowship Hall",
    description: "Games, discussions, and faith exploration for middle and high school students.",
  },
  {
    id: 'r3',
    title: "Evening Bible Study",
    category: "Education",
    date: "Every Thursday",
    time: "7:30 PM",
    location: "Church Library",
    description: "Dive deeper into scripture with our midweek Bible study group.",
  },
  {
    id: 'r4',
    title: "Prayer Breakfast",
    category: "Fellowship",
    date: "Second Saturday",
    time: "9:00 AM",
    location: "Fellowship Hall",
    description: "Monthly gathering for prayer, breakfast, and community connection.",
  },
];

const categoryColors: Record<string, string> = {
  Worship: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  Fellowship: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  Youth: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  Education: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  Special: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
};

const categoryImages: Record<string, string | undefined> = {
  Worship: worshipImg,
  Fellowship: fellowshipImg,
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' });
};

const Happening = () => {
  const [events, setEvents] = useState<ChurchEvent[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      const today = new Date().toISOString().split('T')[0];
      const { data, error } = await supabase
        .from('events')
        .select('id, title, event_date, event_time, location, category, description, featured')
        .eq('published', true)
        .gte('event_date', today)
        .order('event_date', { ascending: true });
      if (!error && data) setEvents(data as ChurchEvent[]);
      setLoaded(true);
    };
    load();
  }, []);

  const featuredEvents = events.filter(e => e.featured);
  const regularDbEvents = events.filter(e => !e.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Events"
        subtitle="Upcoming events, services, and activities at People's Church."
        breadcrumb={[{ label: 'Events', href: '/happening' }]}
      />
      <main className="flex-1">
        {/* Upcoming Events from the church office */}
        <section className="section-padding bg-church-50 dark:bg-[#1a0a17]">
          <div className="container-max">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
                Upcoming
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white">
                Upcoming Events
              </h2>
            </div>

            {loaded && events.length === 0 && (
              <p className="text-church-500 dark:text-white/60 italic">
                No special events are scheduled right now — please check back soon, or join us for any of our weekly gatherings below.
              </p>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[...featuredEvents, ...regularDbEvents].map((event) => (
                <article
                  key={event.id}
                  className="bg-white dark:bg-church-800/30 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  {/* Event Image */}
                  <div className="aspect-[2/1] bg-church-200 dark:bg-church-800 overflow-hidden">
                    {categoryImages[event.category] ? (
                      <img
                        src={categoryImages[event.category]}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Calendar className="w-12 h-12 text-church-400 dark:text-church-600" />
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded ${categoryColors[event.category] || categoryColors.Special}`}>
                        {event.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-church-800 dark:text-white mb-3 group-hover:text-church-600 dark:group-hover:text-church-300 transition-colors">
                      {event.title}
                    </h3>

                    {event.description && (
                      <p className="text-church-600 dark:text-white/60 text-sm mb-4">
                        {event.description}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-4 text-sm text-church-500 dark:text-church-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(event.event_date)}
                      </span>
                      {event.event_time && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.event_time}
                        </span>
                      )}
                      {event.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* Recurring Weekly Schedule */}
        <section className="section-padding bg-gray-300 dark:bg-[#0f0a10]">
          <div className="container-max">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
                Weekly Schedule
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white">
                Regular Activities
              </h2>
            </div>

            <div className="space-y-0 divide-y divide-church-200 dark:divide-church-700 bg-white dark:bg-church-800/20 rounded-lg overflow-hidden">
              {recurringEvents.map((event) => (
                <article
                  key={event.id}
                  className="p-6 flex flex-col md:flex-row md:items-center gap-4 hover:bg-church-50 dark:hover:bg-church-800/40 transition-colors group"
                >
                  <div className="flex items-center gap-4 md:w-56">
                    <div className="w-12 h-12 rounded-lg bg-church-100 dark:bg-church-700 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-church-500 dark:text-church-400" />
                    </div>
                    <div>
                      <p className="font-medium text-church-800 dark:text-white">{event.date}</p>
                      <p className="text-sm text-church-500 dark:text-church-400">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded ${categoryColors[event.category] || categoryColors.Special}`}>
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-church-800 dark:text-white group-hover:text-church-600 dark:group-hover:text-church-300 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-church-600 dark:text-white/60 mt-1">
                      {event.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-church-500 dark:text-church-400">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>

                  <ChevronRight className="w-5 h-5 text-church-300 dark:text-church-600 group-hover:text-church-600 dark:group-hover:text-white group-hover:translate-x-1 transition-all hidden md:block" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Calendar CTA */}
        <section className="py-16 px-4 bg-church-900 dark:bg-[#0a0608]">
          <div className="container-max text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-cta" />
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Want to Get Involved?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              There are many ways to participate in the life of our church. Contact us to learn about volunteer opportunities, committees, and ministry teams.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded hover:bg-cta/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Happening;
