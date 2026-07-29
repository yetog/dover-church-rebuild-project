
import React from 'react';
import { Facebook, Mail, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-church-900 dark:bg-[#183640] text-white pt-9 pb-15">
      <div className="container-max mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Address/Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <address className="not-italic space-y-2 text-sm font-normal leading-relaxed">
              <p>46 South Bradford</p>
              <p>Dover, Delaware 19904</p>
              <div className="pt-2">
                <p className="text-white"><span className="font-semibold">Office:</span></p>
                <p><a href="tel:(302) 674-4177" className="text-white hover:text-church-200 transition">
                  (302) 674-4177
                </a></p>
              </div>
              <div className="pt-2">
                <p className="text-white"><span className="font-semibold">Fax:</span></p>
                <p className="text-white">(302) 674-3423</p>
              </div>
              <div className="pt-2">
                <p className="text-white"><span className="font-semibold">Email:</span></p>
                <p>
                  <a href="mailto:office@pcd-dover.org" className="text-white hover:text-church-200 transition flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    office@pcd-dover.org
                  </a>
                </p>
              </div>
            </address>
          </div>

          {/* Learn/Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Learn</h3>
            <nav className="space-y-3">
              <a
                href="/about"
                className="text-sm font-normal text-white hover:text-church-200 transition block"
              >
                About Us
              </a>
              <a
                href="#worship"
                className="text-sm font-normal text-white hover:text-church-200 transition block"
              >
                Worship Schedule
              </a>
              <a
                href="#sermons"
                className="text-sm font-normal text-white hover:text-church-200 transition block"
              >
                Sermons
              </a>
              <a
                href="/contact"
                className="text-sm font-normal text-white hover:text-church-200 transition block"
              >
                Get Involved
              </a>
              <a
                href="#resources"
                className="text-sm font-normal text-white hover:text-church-200 transition block"
              >
                Resources
              </a>
            </nav>
          </div>

          {/* Social/Follow Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Follow</h3>
            <div className="space-y-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-church-200 transition text-sm font-normal"
              >
                <Facebook className="h-5 w-5 mr-3" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.youtube.com/@PeoplesChurchOfDover"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-church-200 transition text-sm font-normal"
              >
                <Youtube className="h-5 w-5 mr-3" />
                <span>YouTube</span>
              </a>
            </div>
            <p className="text-xs mt-8 leading-relaxed">
              The People's Church of Dover is an Open and Affirming Congregation.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-church-700 dark:border-church-600 mt-12 pt-6 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} The People's Church of Dover UCC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
