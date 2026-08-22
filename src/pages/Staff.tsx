import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Mail, Phone } from 'lucide-react';

const staffMembers = [
  {
    name: "Rev. Dr. G. Derrick Hodge",
    role: "Senior Pastor & Executive Director, PCC",
    email: "gdhodge@pcd-dover.org",
    phone: "(302) 674-4177",
    bio: "Cultural anthropologist with a Ph.D., author of books on cross-racial ministry and community engagement. Leading People's Church and the People's Community Center.",
    placeholder: false,
  },
  {
    name: "Sue Harris",
    role: "Community Outreach Coordinator",
    email: "office@pcd-dover.org",
    bio: "Working alongside Pastor Hodge to serve the homeless and those in need in downtown Dover.",
    placeholder: false,
  },
  {
    name: "Contact Office",
    role: "Church Office",
    email: "office@pcd-dover.org",
    phone: "(302) 674-4177",
    bio: "For general inquiries, please contact our church office during regular hours.",
    placeholder: true,
  },
];

const layLeaders = [
  {
    name: "[Name]",
    role: "Moderator",
    description: "Leads church council and congregational meetings",
  },
  {
    name: "[Name]",
    role: "Deacon Chair",
    description: "Oversees worship and pastoral care ministries",
  },
  {
    name: "[Name]",
    role: "Trustee Chair",
    description: "Manages church property and finances",
  },
  {
    name: "[Name]",
    role: "Christian Education",
    description: "Coordinates Sunday School and youth programs",
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
        <section className="section-padding bg-white dark:bg-[#1a0a17]">
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
                  {/* Photo Placeholder */}
                  <div className="aspect-square bg-church-200 dark:bg-church-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-church-300 dark:bg-church-700 flex items-center justify-center">
                        <span className="text-2xl text-church-500 dark:text-church-400">?</span>
                      </div>
                      <p className="text-xs text-church-400 dark:text-church-500">
                        Photo needed
                      </p>
                    </div>
                  </div>

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

            <p className="text-center text-xs text-church-400 dark:text-church-500 mt-8 italic">
              3 staff photos needed - replace placeholders with actual headshots (recommended: 400x400px square)
            </p>
          </div>
        </section>

        {/* Lay Leaders Section */}
        <section className="section-padding bg-church-50 dark:bg-[#0f0a10]">
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
                <div key={index} className="bg-white dark:bg-church-800/30 rounded-lg p-6">
                  <div className="w-16 h-16 mb-4 rounded-full bg-church-100 dark:bg-church-800 flex items-center justify-center">
                    <span className="text-lg text-church-400 dark:text-church-500">?</span>
                  </div>
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
              ))}
            </div>

            <p className="text-center text-xs text-church-400 dark:text-church-500 mt-8 italic">
              Replace placeholder names with actual lay leaders
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Staff;
