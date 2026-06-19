import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface StubPageProps {
  title: string;
  banner: string;
}

const StubPage = ({ title, banner }: StubPageProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div
        className="relative h-48 md:h-64 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-church-800/60" />
        <h1 className="relative z-10 text-3xl md:text-4xl font-heading font-bold text-white text-center px-4 drop-shadow">
          {title}
        </h1>
      </div>
      <main className="flex-1 flex items-center justify-center py-24">
        <p className="text-church-500 text-lg">Content coming soon.</p>
      </main>
      <Footer />
    </div>
  );
};

export default StubPage;
