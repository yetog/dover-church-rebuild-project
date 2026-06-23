
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import childrenYouthImg from "@/assets/programs/children-youth-btn.jpg";
import neighborsImg from "@/assets/programs/neighbors-in-need-1.jpg";
import communityHealthImg from "@/assets/programs/community-health-btn.jpg";

const CommunitySection = () => {
  const communityPrograms = [
    {
      id: 1,
      title: "Center for Children and Youth",
      description: "Providing education, mentorship, and support programs for young people in our community.",
      image: childrenYouthImg
    },
    {
      id: 2,
      title: "Center for Neighbors in Need",
      description: "Offering food assistance, clothing, and other essential resources to families facing hardship.",
      image: neighborsImg
    },
    {
      id: 3,
      title: "Center for Community Health",
      description: "Supporting overall wellness through health education, counseling services, and support groups.",
      image: communityHealthImg
    }
  ];

  return (
    <section id="community" className="section-padding bg-church-50 dark:bg-[#1a0a17]">
      <div className="container mx-auto">
        <h2 className="section-title dark:text-white">People's Community Center</h2>
        <p className="section-subtitle dark:text-[#ede5f0]">
          Serving our community through outreach programs and assistance for our neighbors in need.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {communityPrograms.map(program => (
            <Card key={program.id} className="overflow-hidden shadow-lg border-0 dark:bg-[#422F3C]">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${program.image})` }}
              ></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-church-800 dark:text-white">{program.title}</h3>
                <p className="text-church-600 dark:text-[#ede5f0] mb-4">{program.description}</p>
                <Button
                  variant="outline"
                  className="w-full border-cta text-cta hover:bg-cta hover:text-white transition-colors duration-200"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
