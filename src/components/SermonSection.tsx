
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
    <section id="videos" className="section-padding">
      <div className="container mx-auto">
        <h2 className="display-heading">Sermon Videos</h2>
        <p className="section-subtitle">
          Join us for worship online through our recorded sermons and live services.
        </p>

        <div className="bg-church-700 text-white p-6 rounded-lg mb-12 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Join Us Live</h3>
          <p className="mb-4">Every Sunday at 10:00 AM EDT</p>
          <Button 
            className="bg-white text-church-700 hover:bg-gray-100"
            size="lg"
            asChild
          >
            <a href="https://www.youtube.com/channel/UCXXXXXXX" target="_blank" rel="noopener noreferrer">
              <Video className="mr-2 h-5 w-5" /> Watch on YouTube
            </a>
          </Button>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8 text-church-800">Recent Sermons</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentSermons.map(sermon => (
            <Card key={sermon.id} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${sermon.thumbnail})` }}
              ></div>
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-1 text-church-800">{sermon.title}</h4>
                <p className="text-church-600 text-sm mb-4">{sermon.date}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-cta text-cta hover:bg-cta hover:text-white"
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

        <div className="text-center mt-8">
          <Button 
            variant="default"
            className="bg-cta hover:bg-cta-hover text-white"
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
