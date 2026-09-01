import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Mail, Phone } from 'lucide-react';
import revHodgeImg from '@/assets/staff/rev-hodge.jpg';
import sueHarrisImg from '@/assets/staff/sue-harris.jpg';
import johnImg from '@/assets/staff/John.jpg';
import robinImg from '@/assets/staff/robin.jpg';
import cherylImg from '@/assets/staff/Cheryl.jpg';
import jamesImg from '@/assets/staff/james.jpg';
import paulImg from '@/assets/staff/paul.jpg';
import randalImg from '@/assets/staff/Randal.jpg';
import kathyImg from '@/assets/staff/kathy-h.jpg';
import cjImg from '@/assets/staff/cj.jpg';
import clarenceImg from '@/assets/staff/clarence.jpg';
import edImg from '@/assets/staff/ed.jpg';
import ileanaImg from '@/assets/staff/ileana.jpg';

const staffMembers = [
  {
    name: "Rev. Dr. G. Derrick Hodge",
    role: "Senior Pastor & Executive Director, PCC",
    email: "gdhodge@pcd-dover.org",
    phone: "(302) 674-4177",
    bio: "Cultural anthropologist with a Ph.D., author of books on cross-racial ministry and community engagement. Leading People's Church and the People's Community Center.",
    image: revHodgeImg,
  },
  {
    name: "Sue Harris",
    role: "Community Outreach Coordinator",
    email: "office@pcd-dover.org",
    bio: "Working alongside Pastor Hodge to serve the homeless and those in need in downtown Dover.",
    image: sueHarrisImg,
  },
  {
    name: "Contact Office",
    role: "Church Office",
    email: "office@pcd-dover.org",
    phone: "(302) 674-4177",
    bio: "For general inquiries, please contact our church office during regular hours.",
    image: null,
  },
];

const layLeaders = [
  {
    name: "John Aliison",
    role: "Moderator",
    description: "Leads church council and congregational meetings",
    image: johnImg,
  },
  {
    name: "Robin Hinderer",
    role: "Treasurer",
    description: "Oversees worship and pastoral care ministries",
    image: robinImg,
  },
  {
    name: "Cheryl Goldsmith",
    role: "Secretary",
    description: "Manages church property and finances",
    image: cherylImg,
  },
  {
    name: "James",
    role: "Lay Leader",
    description: "Serving the congregation through volunteer leadership",
    image: jamesImg,
  },
  {
    name: "Paul",
    role: "Lay Leader",
    description: "Serving the congregation through volunteer leadership",
    image: paulImg,
  },
  {
    name: "Randal",
    role: "Lay Leader",
    description: "Serving the congregation through volunteer leadership",
    image: randalImg,
  },
  {
    name: "Kathy H.",
    role: "Lay Leader",
    description: "Serving the congregation through volunteer leadership",
    image: kathyImg,
  },
  {
    name: "CJ",
    role: "Lay Leader",
    description: "Serving the congregation through volunteer leadership",
    image: cjImg,
  },
  {
    name: "Clarence",
    role: "Lay Leader",
    description: "Serving the congregation through volunteer leadership",
    image: clarenceImg,
  },
  {
    name: "Ed",
    role: "Lay Leader",
    description: "Serving the congregation through volunteer leadership",
    image: edImg,
  },
  {
    name: "Ileana",
    role: "Lay Leader",
    description: "Serving the congregation through volunteer leadership",
    image: ileanaImg,
  },
];

const Staff = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Staff & Leaders"
        subtitle="Meet our pastor, staff, and lay leaders who guide our congregation."
        breadcrumb={[
          { label: 'About', href: '/about' },
          { label: 'Staff', href: '/staff' },
        ]}
      />
      <main className="flex-1">
        {/* Staff Section */}
        <section className="section-padding bg-church-50 dark:bg-[#1a0a17]">
          <div className="container-max">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
                Our Team
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white">
                Church Staff
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staffMembers.map((member, index) => (
                <div key={index} className="bg-church-50 dark:bg-church-800/30 rounded-lg overflow-hidden">
                  {/* Photo */}
                  {member.image ? (
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-square bg-church-200 dark:bg-church-800 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-church-300 dark:bg-church-700 flex items-center justify-center">
                          <Mail className="w-8 h-8 text-church-500 dark:text-church-400" />
                        </div>
                        <p className="text-xs text-church-400 dark:text-church-500">
                          Contact us
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-church-800 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-cta font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-sm text-church-600 dark:text-white/60 mb-4">
                      {member.bio}
                    </p>
                    <div className="space-y-2">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 text-sm text-church-600 dark:text-church-300 hover:text-cta transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          {member.email}
                        </a>
                      )}
                      {member.phone && (
                        <a
                          href={`tel:${member.phone.replace(/\D/g, '')}`}
                          className="flex items-center gap-2 text-sm text-church-600 dark:text-church-300 hover:text-cta transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {member.phone}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Lay Leaders Section */}
        <section className="section-padding bg-gray-300 dark:bg-[#0f0a10]">
          <div className="container-max">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
                Volunteer Leadership
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white">
                Lay Leaders
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {layLeaders.map((leader, index) => (
                <div key={index} className="bg-white dark:bg-church-800/30 rounded-lg overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-church-800 dark:text-white mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-sm text-cta font-medium mb-2">
                      {leader.role}
                    </p>
                    <p className="text-sm text-church-600 dark:text-white/60">
                      {leader.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Staff;
