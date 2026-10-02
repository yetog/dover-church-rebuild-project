import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { ArrowLeft } from 'lucide-react';

interface StubPageProps {
  title: string;
  banner?: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
}

const StubPage = ({ title, subtitle, breadcrumb }: StubPageProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title={title}
        subtitle={subtitle || "This page is coming soon."}
        breadcrumb={breadcrumb}
      />
      <main className="flex-1 bg-gray-300 dark:bg-[#1a0a17]">
        <div className="container-max py-16 md:py-24 px-4">
          <div className="max-w-2xl">
            <p className="text-lg text-church-600 dark:text-white mb-8">
              {'To volunteer to help our neighbors through the community center, click here.\n\n\nMembers of the church may make an appointment with the pastor, call 674-4177, or write to: pastor@pcd-dover.org.    \n\n\nFolks from the community who need help can call the church office to utilities assistance (674-4177, option 2) or, for more help, go to People\'s Community Center website by clicking here.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-church-600 dark:text-church-300 hover:text-cta transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cta text-white font-semibold rounded hover:bg-cta/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StubPage;
