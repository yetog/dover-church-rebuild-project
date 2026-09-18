import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import partnersBanner from '@/assets/photos/Serving_our_Neighbors.jpg';
import delawareSeal from '@/assets/partners/delaware-seal.webp.asset.json';
import cityOfDover from '@/assets/partners/city-of-dover.png.asset.json';
import imaDover from '@/assets/partners/ima-dover.png.asset.json';
import boysGirlsClubs from '@/assets/partners/boys-girls-clubs.avif.asset.json';
import neighborGood from '@/assets/partners/neighborgood-partners.avif.asset.json';
import capitalSchoolDistrict from '@/assets/partners/capital-school-district.png.asset.json';

const partners = [
  {
    name: 'State of Delaware',
    image: delawareSeal.url,
    description: 'Working with state agencies to serve the people of Delaware.',
  },
  {
    name: 'City of Dover',
    image: cityOfDover.url,
    description: 'Partnering with our city in the capital of the First State.',
  },
  {
    name: 'Interdenominational Ministerial Alliance of Dover and Vicinity, Inc.',
    image: imaDover.url,
    description: 'One for all, all for one — clergy united across Dover and the surrounding communities.',
  },
  {
    name: 'Boys & Girls Clubs of Delaware',
    image: boysGirlsClubs.url,
    description: 'Supporting young people across Delaware with safe places to learn and grow.',
  },
  {
    name: 'NeighborGood Partners',
    image: neighborGood.url,
    description: 'Building stronger neighborhoods through housing, lending, and community development.',
  },
  {
    name: 'Capital School District',
    image: capitalSchoolDistrict,
    description: 'Supporting students and families in Dover through our neighborhood schools.',
  },
];

const Partners = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <PageHeader
      title="Partners"
      subtitle="Organizations and ministries we partner with in our mission."
      breadcrumb={[
        { label: 'About', href: '/about' },
        { label: 'Partners', href: '/partners' },
      ]}
      image={partnersBanner}
      imageAlt="Serving our neighbors in downtown Dover"
      className="pb-4 md:pb-6"
    />
    <main className="flex-1">
      <section className="section-padding pt-6 md:pt-10 bg-church-50 dark:bg-[#0f0a10]">
        <div className="container-max">
          <p className="max-w-3xl mx-auto text-center text-lg text-church-700 dark:text-white/70 leading-relaxed mb-12">
            People&rsquo;s Church of Dover works alongside civic, denominational, and community
            organizations to serve our neighbors. We are grateful for these partners.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white dark:bg-[#1a0a17] rounded-lg shadow-lg p-6 flex flex-col items-center text-center border-2 border-church-500"
              >
                <div className="h-28 w-full flex items-center justify-center mb-5">
                  <img
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    className="max-h-28 max-w-full object-contain"
                  />
                </div>
                <h2 className="text-lg font-black text-church-800 dark:text-white mb-2">
                  {partner.name}
                </h2>
                <p className="text-sm text-church-600 dark:text-white/70 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Partners;
