import React from 'react';
import { Mail, Phone } from 'lucide-react';
import sueHarrisImg from '@/assets/staff/sue-harris.jpg';
import johnImg from '@/assets/staff/John.jpg';
import robinImg from '@/assets/staff/robin.jpg';
import cherylImg from '@/assets/staff/Cheryl.jpg';
import jamesImg from '@/assets/staff/james.jpg';
import paulImg from '@/assets/staff/paul.jpg';
import randalImg from '@/assets/staff/Randal.jpg';
import kathyImg from '@/assets/staff/kathy-h.jpg';
import cjImg from '@/assets/staff/cj.jpg';
import contactOfficeImg from '@/assets/staff/contact-office.jpg';

// Rev. Dr. Hodge has his own dedicated PastorSection above this component,
// so the Church Staff grid here lists the supporting staff only.
const staffMembers = [
  {
    name: 'Jerusha Bowden',
    role: 'Church Administrator',
    email: 'office@pcd-dover.org',
    phone: '(302) 674-4177',
    bio: 'Organizes the office, orders supplies, prepares weekly worship materials, and keeps the Pastor in line with an iron fist.',
    image: contactOfficeImg,
  },
  {
    name: 'Kathy Hanebutt',
    role: 'Organist and Pianist',
    bio: 'Plans and Performs music for weekly worship.',
    image: kathyImg,
  },
  {
    name: 'Dr. Paul Hanebutt',
    role: 'Building Maintenance \nand Management',
    bio: 'Manages all aspect of building restoration and maintenance.',
    image: paulImg,
  },
  {
    name: 'Dr. Randal Revay',
    role: 'Sexton',
    bio: 'Ensures that the building is in clean and workable order.',
    image: randalImg,
  },
];

const layLeaders = [
  {
    name: 'John Aliison',
    role: 'Moderator',
    description: 'Chairs meetings of the congregation meetings and the Trustees. Provides overall coordination of our many ministries',
    image: johnImg,
  },
  {
    name: 'Robin Hinderer',
    role: 'Treasurer',
    description: 'Manages and overseas congregational finances. Provides oversight of staff financial operations.',
    image: robinImg,
  },
  {
    name: 'Cheryl Goldsmith',
    role: 'Secretary',
    description: 'Records the minutes of Trustee meetings and congregational meetings. ',
    image: cherylImg,
  },
  {
    name: 'Reverend James Caldwell',
    role: 'Ministries to our Church Family',
    description: 'With the Pastor, overseas worship, faith formation, and pastoral care.',
    image: jamesImg,
  },
  {
    name: 'Dr. Paul Hanebutt',
    role: 'Building Maintenance \nand Management',
    description: 'Manages all aspect of building restoration and maintenance.',
    image: paulImg,
  },
  {
    name: 'C.J. Santiago',
    role: 'Chair of the \nPastoral Relations Committee',
    description: 'Leads the group of laity who facilitate communication between the Pastor and congregation, and helps identify areas of concern.',
    image: cjImg,
  },
  {
    name: 'Sue Harris',
    role: 'Trustee for Ministries in the Community',
    description: 'Manages the work of the Center for Neighbors in Need, and any way that the congregation ser',
    image: sueHarrisImg,
  },
];

const StaffSection = () => {
  return (
    <>
      {/* Church Staff */}
      <section id="staff" className="section-padding bg-church-50 dark:bg-[#1a0a17]">
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
                  <div className="aspect-square overflow-hidden border-2 border-church-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-[50%_18%]"
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

      {/* Lay Leaders */}
      <section id="lay-leaders" className="section-padding bg-gray-300 dark:bg-[#0f0a10]">
        <div className="container-max">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
              LAY LEADERSHIP
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white">
              Board of Trustees
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {layLeaders.map((leader, index) => (
              <div key={index} className="bg-white dark:bg-church-800/30 rounded-lg overflow-hidden">
                <div className="aspect-square overflow-hidden border-2 border-church-500">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-[50%_18%]"
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
    </>
  );
};

export default StaffSection;
