import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Heart, CreditCard, Building2, HandHeart, Mail, ExternalLink } from 'lucide-react';

const givingOptions = [
  {
    icon: CreditCard,
    title: "Online Giving",
    description: "Make a secure one-time or recurring donation through our online giving platform.",
    cta: "Give Online",
    href: "#", // Replace with actual giving platform URL (Tithe.ly, PayPal, etc.)
    primary: true,
  },
  {
    icon: Building2,
    title: "In-Person",
    description: "Give during Sunday worship. Offering plates are passed during the service.",
    cta: "Join Us Sunday",
    href: "/about",
    primary: false,
  },
  {
    icon: Mail,
    title: "By Mail",
    description: "Send a check to: People's Church of Dover, 46 South Bradford, Dover, DE 19904",
    cta: "Get Address",
    href: "/contact",
    primary: false,
  },
];

const impactAreas = [
  {
    title: "Worship & Ministry",
    description: "Supporting Sunday services, music ministry, and pastoral care.",
    percentage: 40,
  },
  {
    title: "Community Outreach",
    description: "Food pantry, PCC programs, and neighbor assistance.",
    percentage: 30,
  },
  {
    title: "Building & Operations",
    description: "Maintaining our historic building and daily operations.",
    percentage: 20,
  },
  {
    title: "Education & Youth",
    description: "Sunday School, youth programs, and faith formation.",
    percentage: 10,
  },
];

const Give = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="Give"
        subtitle="Your generosity supports our ministry and mission in Dover and beyond."
        breadcrumb={[{ label: 'Give', href: '/give' }]}
      />
      <main className="flex-1">
        {/* Giving Options */}
        <section className="section-padding bg-white dark:bg-[#1a0a17]">
          <div className="container-max">
            <div className="max-w-3xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
                Support Our Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-4">
                Ways to Give
              </h2>
              <p className="text-lg text-church-600 dark:text-white/70">
                Thank you for considering a gift to People's Church. Your generosity enables us to worship together, serve our community, and share God's love.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {givingOptions.map(({ icon: Icon, title, description, cta, href, primary }) => (
                <div
                  key={title}
                  className={`rounded-lg p-8 ${
                    primary
                      ? 'bg-church-800 dark:bg-church-700 text-white'
                      : 'bg-church-50 dark:bg-church-800/30'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${
                    primary
                      ? 'bg-cta'
                      : 'bg-church-100 dark:bg-church-800'
                  }`}>
                    <Icon className={`w-6 h-6 ${primary ? 'text-white' : 'text-church-600 dark:text-white'}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${
                    primary ? 'text-white' : 'text-church-800 dark:text-white'
                  }`}>
                    {title}
                  </h3>
                  <p className={`text-sm mb-6 ${
                    primary ? 'text-white/80' : 'text-church-600 dark:text-white/60'
                  }`}>
                    {description}
                  </p>
                  <a
                    href={href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                      primary
                        ? 'text-cta hover:text-white'
                        : 'text-church-600 dark:text-church-300 hover:text-cta'
                    }`}
                  >
                    {cta}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-cta/10 dark:bg-cta/20 rounded-lg text-center">
              <p className="text-sm text-church-700 dark:text-white/80">
                <strong>Note:</strong> Replace the "Give Online" link with your actual giving platform (Tithe.ly, PayPal, Vanco, etc.)
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="section-padding bg-church-50 dark:bg-[#0f0a10]">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
                  Your Impact
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-6">
                  Where Your Gift Goes
                </h2>
                <p className="text-lg text-church-600 dark:text-white/70 mb-8">
                  Every dollar you give supports our mission to worship God, grow in faith, and serve our neighbors. Here's how your generosity makes a difference.
                </p>

                <div className="space-y-6">
                  {impactAreas.map(({ title, description, percentage }) => (
                    <div key={title}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-church-800 dark:text-white">{title}</h3>
                        <span className="text-sm font-semibold text-cta">{percentage}%</span>
                      </div>
                      <div className="h-2 bg-church-200 dark:bg-church-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-cta rounded-full"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <p className="text-sm text-church-500 dark:text-church-400 mt-1">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-church-400 dark:text-church-500 mt-6 italic">
                  Percentages are illustrative - replace with actual budget allocation
                </p>
              </div>

              {/* Testimonial/Quote */}
              <div className="bg-white dark:bg-church-800/30 rounded-lg p-8 lg:p-12">
                <HandHeart className="w-12 h-12 text-cta mb-6" />
                <blockquote className="text-xl md:text-2xl italic text-church-700 dark:text-white/90 mb-6 leading-relaxed">
                  "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
                </blockquote>
                <cite className="text-sm text-church-500 dark:text-church-400 not-italic font-semibold">
                  — 2 Corinthians 9:7
                </cite>
              </div>
            </div>
          </div>
        </section>

        {/* Questions CTA */}
        <section className="py-16 px-4 bg-church-900 dark:bg-[#0a0608]">
          <div className="container-max text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-cta" />
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Questions About Giving?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              We're happy to answer any questions about donations, planned giving, or how your gifts are used. Contact our church office.
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

export default Give;
