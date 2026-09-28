
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import DailyDevotionalSection from '@/components/DailyDevotionalSection';

const MeditationSection = () => {
  const prayerRequests = [
    "For those suffering from illness and their caregivers",
    "For peace in regions affected by conflict",
    "For our local community and those in need",
    "For our church leadership and ministries",
    "For families facing financial difficulties"
  ];

  return (
    <div id="meditation">
      <DailyDevotionalSection />
      <section className="section-padding bg-church-50">
        <div className="container mx-auto max-w-3xl">
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
      </section>
    </div>
  );
};

export default MeditationSection;
