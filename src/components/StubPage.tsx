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
            <div className="space-y-6 text-lg text-church-600 dark:text-white mb-8">
              <p>
                To volunteer to help our neighbors through the community center,{' '}
                <a href="https://pcc-dover.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-cta underline hover:text-cta/80">click here</a>.
              </p>
              <p>
                Members of the church may make an appointment with the pastor, call{' '}
                <a href="tel:3026744177" className="font-semibold text-cta underline hover:text-cta/80">674-4177</a>, or write to:{' '}
                <a href="mailto:pastor@pcd-dover.org" className="font-semibold text-cta underline hover:text-cta/80">pastor@pcd-dover.org</a>.
              </p>
              <p>
                Folks from the community who need help can call the church office to utilities assistance (674-4177, option 2) or, for more help, go to People's Community Center website by{' '}
                <a href="https://pcc-dover.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-cta underline hover:text-cta/80">clicking here</a>.
              </p>
            </div>
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
