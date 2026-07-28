
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video } from 'lucide-react';
import sermonPeace from "@/assets/sermon-peace.jpg";
import sermonCommunity from "@/assets/sermon-community.jpg";
import sermonFaith from "@/assets/sermon-faith.jpg";

const SermonSection = () => {
  const recentSermons = [
    {
      id: 1,
      title: "Finding Peace in Uncertain Times",
      date: "April 28, 2025",
      thumbnail: sermonPeace,
      videoUrl: "https://www.youtube.com/watch?v=example1"
    },
    {
      id: 2,
      title: "The Power of Community",
      date: "April 21, 2025",
      thumbnail: sermonCommunity,
      videoUrl: "https://www.youtube.com/watch?v=example2"
    },
    {
      id: 3,
      title: "Walking in Faith",
      date: "April 14, 2025",
      thumbnail: sermonFaith,
      videoUrl: "https://www.youtube.com/watch?v=example3"
    }
  ];

  return (
    <section id="videos" className="section-padding bg-white dark:bg-[#1a0a17]">
      <div className="container-max">
        <h2 className="section-title dark:text-white">Sermon Videos</h2>
        <p className="section-subtitle dark:text-[#ede5f0]">
          Join us for worship online through our recorded sermons and live services.
        </p>

        <div className="bg-church-700 text-white p-6 rounded-lg mb-12">
          <h3 className="text-2xl font-bold mb-2">Join Us Live</h3>
          <p className="mb-4">Every Sunday at 10:00 AM EDT</p>
          <Button
            className="button-solid bg-white text-church-700 hover:bg-gray-100"
            size="lg"
            asChild
          >
            <a href="https://www.youtube.com/channel/UCXXXXXXX" target="_blank" rel="noopener noreferrer">
              <Video className="mr-2 h-5 w-5" /> Watch on YouTube
            </a>
          </Button>
        </div>

        <h3 className="section-title dark:text-white mb-8">Recent Sermons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentSermons.map(sermon => (
            <Card key={sermon.id} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow dark:bg-[#422F3C]">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${sermon.thumbnail})` }}
              ></div>
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-1 text-church-800 dark:text-white">{sermon.title}</h4>
                <p className="text-church-600 dark:text-[#ede5f0] text-sm mb-4">{sermon.date}</p>
                <Button
                  className="button-solid w-full bg-[#4CAF50] text-white hover:bg-[#45a049]"
                  asChild
                >
                  <a href={sermon.videoUrl} target="_blank" rel="noopener noreferrer">
                    <Video className="mr-2 h-4 w-4" /> Watch Sermon
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Button
            className="button-solid bg-[#5A2653] text-white hover:bg-[#4a1d42]"
            asChild
          >
            <a href="https://www.youtube.com/channel/UCXXXXXXX" target="_blank" rel="noopener noreferrer">
              View All Sermons
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SermonSection;
