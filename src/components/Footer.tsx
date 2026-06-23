
import React from 'react';
import { Facebook, Mail, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-church-800 dark:bg-[#0d0510] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Address */}
          <div>
            <h3 className="text-xl font-bold mb-4">Visit Us</h3>
            <address className="not-italic">
              <p className="mb-2">46 South Bradford</p>
              <p className="mb-4">Dover, Delaware 19904</p>
              <p className="mb-1"><span className="font-semibold">Office:</span> (302) 674-4177</p>
              <p className="mb-1"><span className="font-semibold">Facsimile:</span> (302) 674-3423</p>
              <p className="mb-1 flex items-center">
                <span className="font-semibold mr-2">Email:</span>
                <a href="mailto:office@pcd-dover.org" className="hover:text-church-200 underline flex items-center">
                  <Mail className="h-4 w-4 mr-1" />
                  office@pcd-dover.org
                </a>
              </p>
            </address>
          </div>
          
          {/* Service Times */}
          <div>
            <h3 className="text-xl font-bold mb-4">Worship With Us</h3>
            <p className="mb-2">Sundays at 10:00 AM</p>
            <p className="mb-4">In-person or Online</p>
            <a 
              href="#videos" 
              className="bg-church-600 hover:bg-church-700 text-white font-medium py-2 px-4 rounded inline-block"
            >
              Join Us Online
            </a>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-church-200 mb-4"
            >
              <Facebook className="h-6 w-6 mr-2" />
              <span>Follow us on Facebook</span>
            </a>
            <a
              href="https://www.youtube.com/@PeoplesChurchOfDover"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-church-200 mb-4"
            >
              <Youtube className="h-6 w-6 mr-2" />
              <span>Watch on YouTube</span>
            </a>
            <p className="text-sm mt-8">
              The People's Church of Dover is an Open and Affirming Congregation.
            </p>
          </div>
        </div>
        
        <div className="border-t border-church-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} The People's Church of Dover UCC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
