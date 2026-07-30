
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-church-900 dark:bg-[#0a0608] text-white">
      {/* Main Footer */}
      <div className="container-max mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Location Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-6">Visit Us</h3>
            <address className="not-italic space-y-3 text-sm leading-relaxed">
              <p className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-white/60" />
                <span>46 South Bradford<br />Dover, Delaware 19904</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/60" />
                <a href="tel:(302) 674-4177" className="hover:text-cta transition">(302) 674-4177</a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/60" />
                <a href="mailto:office@pcd-dover.org" className="hover:text-cta transition">office@pcd-dover.org</a>
              </p>
            </address>
          </div>

          {/* Worship Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-6">Worship</h3>
            <nav className="space-y-3 text-sm">
              <Link to="/sermons" className="block hover:text-cta transition">Watch Services</Link>
              <Link to="/meditation" className="block hover:text-cta transition">Daily Devotional</Link>
              <Link to="/happening" className="block hover:text-cta transition">Upcoming Events</Link>
              <Link to="/newsletter" className="block hover:text-cta transition">Newsletter</Link>
            </nav>
          </div>

          {/* Community Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-6">Community</h3>
            <nav className="space-y-3 text-sm">
              <a href="https://pcc-dover.org" target="_blank" rel="noopener noreferrer" className="block hover:text-cta transition">People's Community Center</a>
              <a href="https://pcc-dover.org/programs" target="_blank" rel="noopener noreferrer" className="block hover:text-cta transition">Programs & Services</a>
              <a href="https://pcc-dover.org/get-involved" target="_blank" rel="noopener noreferrer" className="block hover:text-cta transition">Get Involved</a>
              <a href="https://pcc-dover.org/contact" target="_blank" rel="noopener noreferrer" className="block hover:text-cta transition">Contact PCC</a>
            </nav>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-6">About</h3>
            <nav className="space-y-3 text-sm">
              <Link to="/about" className="block hover:text-cta transition">Our Church</Link>
              <Link to="/staff" className="block hover:text-cta transition">Staff & Leaders</Link>
              <Link to="/ucc" className="block hover:text-cta transition">United Church of Christ</Link>
              <Link to="/partners" className="block hover:text-cta transition">Partners</Link>
              <Link to="/contact" className="block hover:text-cta transition">Contact</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="container-max mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} The People's Church of Dover UCC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/60">Open and Affirming Congregation</span>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@PeoplesChurchOfDover"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
