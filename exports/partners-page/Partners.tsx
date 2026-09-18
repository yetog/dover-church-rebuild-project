import React from 'react';
// Standalone Partners page exported from the People's Church of Dover site.
// Drop this into another React + Tailwind site. See README.md for the
// color tokens it expects and where to add your own navbar/footer.
import bannerImage from './assets/banner-serving-neighbors.jpg';
import delawareSeal from './assets/delaware-seal.webp';
import cityOfDover from './assets/city-of-dover.png';
import imaDover from './assets/ima-dover.png';
import boysGirlsClubs from './assets/boys-girls-clubs.avif';
import neighborGood from './assets/neighborgood-partners.avif';
import capitalSchoolDistrict from './assets/capital-school-district.png';

const partners = [
  {
    name: 'State of Delaware',
    image: delawareSeal,
    description: 'Working with state agencies to serve the people of Delaware.',
  },
  {
    name: 'City of Dover',
    image: cityOfDover,
    description: 'Partnering with our city in the capital of the First State.',
  },
  {
    name: 'Interdenominational Ministerial Alliance of Dover and Vicinity, Inc.',
    image: imaDover,
    description: 'One for all, all for one — clergy united across Dover and the surrounding communities.',
  },
  {
    name: 'Boys & Girls Clubs of Delaware',
    image: boysGirlsClubs,
    description: 'Supporting young people across Delaware with safe places to learn and grow.',
  },
  {
    name: 'NeighborGood Partners',
    image: neighborGood,
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
    {/* TODO: render your site's Navbar here */}
    <section className="relative bg-church-800 py-16 md:py-24 pb-4 md:pb-6 px-4 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt="Serving our neighbors in downtown Dover"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-church-900/75" />
      </div>
      <div className="relative container mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
          Partners
        </h1>
        <p className="text-lg text-white/70 max-w-2xl">
          Organizations and ministries we partner with in our mission.
        </p>
      </div>
    </section>
    <main className="flex-1">
      <section className="px-4 py-16 md:py-24 pt-6 md:pt-10 bg-church-50">
        <div className="container mx-auto max-w-6xl">
          <p className="max-w-3xl mx-auto text-center text-lg text-church-700 leading-relaxed mb-12">
            People&rsquo;s Church of Dover Community Center&nbsp; would not be very helpful without our engagement with many other non-profit organizations. We work alongside civic, denominational, and community organizations to serve our neighbors. We are grateful for these partners.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center border-2 border-church-500"
              >
                <div className="h-28 w-full flex items-center justify-center mb-5">
                  <img
                    src={partner.image}
                    alt={`${partner.name} logo`}
                    className="max-h-28 max-w-full object-contain"
                  />
                </div>
                <h2 className="text-lg font-black text-church-800 mb-2">
                  {partner.name}
                </h2>
                <p className="text-sm text-church-600 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    {/* TODO: render your site's Footer here */}
  </div>
);

export default Partners;
