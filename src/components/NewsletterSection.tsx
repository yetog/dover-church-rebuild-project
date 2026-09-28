
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Church Newsletter</h2>
        <p className="section-subtitle">
          Stay connected with our congregation through our regular newsletter publications.
        </p>

        <div className="bg-church-50 p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-church-800 mb-2">Request the Newsletter</h3>
          <p className="text-center text-church-600 mb-6">
            Contact the church office to request the current issue or ask about receiving future newsletters.
          </p>
          <div className="text-center"><Button asChild><a href="mailto:office@pcd-dover.org?subject=Newsletter%20request"><Mail className="w-4 h-4" /> Email the Church Office</a></Button></div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
