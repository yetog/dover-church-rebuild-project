
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const NewsletterSection = () => {
  const newsletters = [
    {
      id: 1,
      title: "Spring 2025 Newsletter",
      date: "April 2025",
      description: "Updates on Easter services, spring community events, and outreach programs.",
      pdfUrl: "#"
    },
    {
      id: 2,
      title: "Winter 2025 Newsletter",
      date: "January 2025",
      description: "Recap of Christmas celebrations, winter assistance programs, and upcoming events.",
      pdfUrl: "#"
    },
    {
      id: 3,
      title: "Fall 2024 Newsletter",
      date: "October 2024",
      description: "Thanksgiving outreach, fall festivals, and ministry updates.",
      pdfUrl: "#"
    }
  ];

  return (
    <section id="newsletter" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Church Newsletter</h2>
        <p className="section-subtitle">
          Stay connected with our congregation through our regular newsletter publications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {newsletters.map(newsletter => (
            <Card key={newsletter.id} className="shadow-md">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-church-800">{newsletter.title}</h3>
                  <span className="bg-church-100 text-church-600 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {newsletter.date}
                  </span>
                </div>
                <p className="text-church-600 mb-4">{newsletter.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-church-600 text-church-600 hover:bg-church-600 hover:text-white"
                  asChild
                >
                  <a href={newsletter.pdfUrl} target="_blank" rel="noopener noreferrer">
                    View PDF
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-church-50 p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-church-800 mb-2">Subscribe to our Newsletter</h3>
          <p className="text-center text-church-600 mb-6">
            Receive our newsletters directly in your inbox. Stay updated with church events, announcements, and community outreach.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow"
              aria-label="Email address"
            />
            <Button 
              type="submit" 
              className="bg-church-600 hover:bg-church-700 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-xs text-church-500 mt-4 text-center">
            We respect your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
