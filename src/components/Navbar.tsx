
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <span className="text-church-800 font-serif font-bold text-xl md:text-2xl">People's Church of Dover</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#who-we-are" className="px-3 py-2 text-church-600 hover:text-church-900 hover:bg-church-50 rounded-md text-sm font-medium">Who We Are</a>
            <a href="#videos" className="px-3 py-2 text-church-600 hover:text-church-900 hover:bg-church-50 rounded-md text-sm font-medium">Videos</a>
            <a href="#meditation" className="px-3 py-2 text-church-600 hover:text-church-900 hover:bg-church-50 rounded-md text-sm font-medium">Meditation</a>
            <a href="#community" className="px-3 py-2 text-church-600 hover:text-church-900 hover:bg-church-50 rounded-md text-sm font-medium">Community</a>
            <a href="#newsletter" className="px-3 py-2 text-church-600 hover:text-church-900 hover:bg-church-50 rounded-md text-sm font-medium">Newsletter</a>
            <a href="#contact" className="px-3 py-2 text-church-600 hover:text-church-900 hover:bg-church-50 rounded-md text-sm font-medium">Contact</a>
            <Button variant="default" className="ml-4 bg-church-600 hover:bg-church-700">Live Service</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-church-600 hover:text-church-800 hover:bg-church-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-church-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#who-we-are" className="block px-3 py-2 text-church-600 hover:text-church-900 hover:bg-church-50 rounded-md text-base font-medium">Who We Are</a>
          <a href="#videos" className="block px-3 py-2 text-church-600 hover:text-church-900 hover:bg-church-50 rounded-md text-base font-medium">Videos</a>
          <a href="#meditation" className="block px-3 py-2 text-church-600 hover:text-church-900 hover:bg-church-50 rounded-md text-base font-medium">Meditation</a>
          <a href="#community" className="block px-3 py-2 text-church-600 hover:text-church-900 hover:bg-church-50 rounded-md text-base font-medium">Community</a>
          <a href="#newsletter" className="block px-3 py-2 text-church-600 hover:text-church-900 hover:bg-church-50 rounded-md text-base font-medium">Newsletter</a>
          <a href="#contact" className="block px-3 py-2 text-church-600 hover:text-church-900 hover:bg-church-50 rounded-md text-base font-medium">Contact</a>
          <Button variant="default" className="w-full mt-2 bg-church-600 hover:bg-church-700">Live Service</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
