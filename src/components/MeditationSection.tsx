
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Book } from 'lucide-react';

const MeditationSection = () => {
  const dailyScripture = {
    verse: "Philippians 4:6-7",
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
    reflection: "In times of worry and anxiety, this verse reminds us to bring our concerns to God with thankful hearts. The promise is clear: God's peace will protect our hearts and minds."
  };

  const prayerRequests = [
    "For those suffering from illness and their caregivers",
    "For peace in regions affected by conflict",
    "For our local community and those in need",
    "For our church leadership and ministries",
    "For families facing financial difficulties"
  ];

  return (
    <section id="meditation" className="section-padding bg-gradient-to-br from-church-50 to-warmGray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Daily Scripture Meditation</h2>
        <p className="section-subtitle">
          Take a moment each day for reflection and prayer.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Book className="h-6 w-6 text-church-600 mr-2" />
                <h3 className="text-2xl font-bold text-church-800">Today's Scripture</h3>
              </div>
              
              <div className="bg-warmGray-50 p-4 rounded-md mb-6">
                <p className="font-semibold text-church-800 mb-2">{dailyScripture.verse}</p>
                <p className="scripture-quote text-lg text-church-700 mb-4">"{dailyScripture.text}"</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3 text-church-800">Reflection</h4>
                <p className="text-church-600">{dailyScripture.reflection}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-church-800 mb-4">Prayer Requests</h3>
              <p className="text-church-600 mb-6">
                Please keep these members of our community in your prayers this week:
              </p>
              
              <ul className="space-y-3">
                {prayerRequests.map((request, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-church-100 text-church-600 mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-church-700">{request}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-church-100">
                <p className="text-sm text-church-600">
                  To submit a prayer request, please contact the church office at (302) 674-4177 or email 
                  <a href="mailto:prayer@pcd-dover.org" className="text-church-700 hover:text-church-900 underline ml-1">
                    prayer@pcd-dover.org
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MeditationSection;
