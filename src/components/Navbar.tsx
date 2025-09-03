
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-white font-serif font-bold text-xl md:text-2xl">People's Church of Dover</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/about" className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md text-sm font-medium">Who We Are</Link>
            <Link to="/sermons" className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md text-sm font-medium">Videos</Link>
            <Link to="/meditation" className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md text-sm font-medium">Meditation</Link>
            <a href="https://preview--dover-church-com.lovable.app/" className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md text-sm font-medium">Community</a>
            <Link to="/newsletter" className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md text-sm font-medium">Newsletter</Link>
            <Link to="/contact" className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md text-sm font-medium">Contact</Link>
            <Button variant="secondary" className="ml-4">Live Service</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50"
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
          <Link to="/about" className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md text-base font-medium">Who We Are</Link>
          <Link to="/sermons" className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md text-base font-medium">Videos</Link>
          <Link to="/meditation" className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md text-base font-medium">Meditation</Link>
          <a href="https://preview--dover-church-com.lovable.app/" className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md text-base font-medium">Community</a>
          <Link to="/newsletter" className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md text-base font-medium">Newsletter</Link>
          <Link to="/contact" className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md text-base font-medium">Contact</Link>
          <Button variant="secondary" className="w-full mt-2">Live Service</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
