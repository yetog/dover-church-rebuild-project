
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="who-we-are" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-subtitle">
          The People's Church of Dover is an Open and Affirming Congregation of the United Church of Christ.
        </p>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="shadow-lg border-0 mb-8 overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col items-center">
                <blockquote className="scripture-quote text-2xl md:text-3xl text-church-800 mb-6 text-center">
                  "Don't place a period where God has placed a comma."
                </blockquote>
                <p className="text-church-600 font-medium">- Gracie Allen -</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="prose max-w-none">
            <p className="text-lg text-center mb-6">
              We believe in extravagant welcome. We believe that God calls us to love one another with no exceptions.
              All are welcome in our church community, regardless of who they are or where they are on their journey of faith.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="bg-church-600 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-church-800">Community</h3>
                <p className="text-church-600">Building meaningful connections through worship and service</p>
              </div>
              
              <div className="text-center">
                <div className="bg-church-600 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-church-800">Faith</h3>
                <p className="text-church-600">Growing spiritually through worship, prayer, and study</p>
              </div>
              
              <div className="text-center">
                <div className="bg-church-600 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-church-800">Service</h3>
                <p className="text-church-600">Reaching out to our neighbors with love and compassion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
