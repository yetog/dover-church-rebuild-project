import React from 'react';
import { Link } from 'react-router-dom';
import { HandHeart, HeartHandshake, Mail, Phone, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import volunteersImage from '@/assets/stock/volunteers.jpg';

const HelpingOthers = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <PageHeader
      title="Helping Others and Getting Help"
      subtitle={'Reaching out to our neighbors with love and compassion,\nthrough service and support.'}
      breadcrumb={[{ label: 'Helping Others and Getting Help', href: '/helping-others' }]}
      image={volunteersImage}
      imageAlt="Volunteers working together to support their community"
    />

    <main className="flex-1 bg-gray-300 dark:bg-[#1a0a17]">
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
              Care in Action
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-4">
              How can we help?
            </h2>
            <p className="text-lg text-church-600 dark:text-white leading-relaxed">
              Whether you want to serve, speak with our pastor, or find practical support, choose the path that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <article className="bg-card text-card-foreground border border-border rounded-lg p-7 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-6">
                <HandHeart className="w-6 h-6" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-church-500 dark:text-church-300 mb-2">Volunteer</p>
              <h3 className="text-2xl font-bold text-church-800 dark:text-white mb-3">Help Our Neighbors</h3>
              <p className="text-church-600 dark:text-white leading-relaxed mb-7 flex-1">
                Volunteer through People's Community Center and join neighbors serving neighbors.
              </p>
              <Button asChild size="lg">
                <a href="https://pcc-dover.org/volunteer" target="_blank" rel="noopener noreferrer">
                  Volunteer with PCC
                </a>
              </Button>
            </article>

            <article className="bg-card text-card-foreground border border-border rounded-lg p-7 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-church-500 dark:text-church-300 mb-2">Church Members</p>
              <h3 className="text-2xl font-bold text-church-800 dark:text-white mb-3">Pastoral Support</h3>
              <p className="text-church-600 dark:text-white leading-relaxed mb-5">
                Members of the church may make an appointment with the pastor.
              </p>
              <div className="space-y-3 mt-auto">
                <a href="tel:3026744177" className="flex items-center gap-3 font-semibold text-church-700 dark:text-white hover:text-cta transition-colors">
                  <Phone className="w-5 h-5 text-cta" /> 674-4177
                </a>
                <a href="mailto:pastor@pcd-dover.org" className="flex items-center gap-3 font-semibold text-church-700 dark:text-white hover:text-cta transition-colors break-all">
                  <Mail className="w-5 h-5 text-cta shrink-0" /> pastor@pcd-dover.org
                </a>
              </div>
            </article>

            <article className="bg-card text-card-foreground border border-border rounded-lg p-7 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-secondary text-secondary-foreground flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-church-500 dark:text-church-300 mb-2">Community Assistance</p>
              <h3 className="text-2xl font-bold text-church-800 dark:text-white mb-3">Find Practical Help</h3>
              <p className="text-church-600 dark:text-white leading-relaxed mb-7 flex-1">
                Call the church office for utilities assistance at 674-4177, option 2, or visit People's Community Center for more help.
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Button asChild variant="secondary" size="lg">
                  <a href="tel:3026744177">Call the Church Office</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://pcc-dover.org" target="_blank" rel="noopener noreferrer">Visit the Community Center</a>
                </Button>
              </div>
            </article>
          </div>

          <div className="mt-12 pt-8 border-t border-church-200 dark:border-church-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <p className="text-church-600 dark:text-white">Not sure where to start? The church office can help direct you.</p>
            <Button asChild variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default HelpingOthers;
