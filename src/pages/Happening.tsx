import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import eventsBanner from '@/assets/stock/event-worship.jpg';
import { Users } from 'lucide-react';
import NewsSection, { weeklyActivities, type WeeklyActivity } from '@/components/NewsSection';

// Upcoming special events — edit this list to add or remove events.
// Same format as the weekly list on the homepage (datetime = day/date, time = time).
const upcomingEvents: WeeklyActivity[] = weeklyActivities;

const Happening = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Events"
        subtitle="Upcoming events, services, and activities at People's Church."
        breadcrumb={[{ label: 'Events', href: '/happening' }]}
        image={eventsBanner}
        imageAlt="Worship gathering at People's Church"
      />
      <main className="flex-1">
        <NewsSection
          eyebrow="Upcoming"
          heading="Upcoming Events"
          items={upcomingEvents}
          showViewAll={false}
          emptyMessage="No special events are scheduled right now — please check back soon, or join us for any of our weekly gatherings below."
        />

        <NewsSection
          eyebrow="Regular Activities"
          heading="Every Week at People's Church"
          items={weeklyActivities}
          showViewAll={false}
          tone="tinted"
        />

        {/* Calendar CTA */}
        <section className="py-16 px-4 bg-church-900 dark:bg-[#0a0608]">
          <div className="container-max text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-cta" />
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Want to Get Involved?
            </h2>
            <p className="text-white mb-8 max-w-xl mx-auto">
              There are many ways to participate in the life of our church.&nbsp;
              <br />
              Contact us to learn about volunteer opportunities and ministry teams.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cta text-white font-semibold rounded hover:bg-cta/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Happening;
