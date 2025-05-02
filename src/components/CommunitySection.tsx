
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CommunitySection = () => {
  const communityPrograms = [
    {
      id: 1,
      title: "Center for Children and Youth",
      description: "Providing education, mentorship, and support programs for young people in our community.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Center for Neighbors in Need",
      description: "Offering food assistance, clothing, and other essential resources to families facing hardship.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Center for Community Health",
      description: "Supporting overall wellness through health education, counseling services, and support groups.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="community" className="section-padding bg-warmGray-100">
      <div className="container mx-auto">
        <h2 className="section-title">People's Community Center</h2>
        <p className="section-subtitle">
          Serving our community through outreach programs and assistance for our neighbors in need.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {communityPrograms.map(program => (
            <Card key={program.id} className="overflow-hidden shadow-lg border-0">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${program.image})` }}
              ></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-church-800">{program.title}</h3>
                <p className="text-church-600 mb-4">{program.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-church-600 text-church-600 hover:bg-church-600 hover:text-white"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mt-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-church-800 mb-4 text-center">Get Involved</h3>
          <p className="text-church-600 mb-6 text-center">
            There are many ways to support our community outreach efforts through donations, volunteering, and participation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-church-600 hover:bg-church-700"
            >
              Volunteer
            </Button>
            <Button 
              variant="outline" 
              className="border-church-600 text-church-600 hover:bg-church-600 hover:text-white"
            >
              Donate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
