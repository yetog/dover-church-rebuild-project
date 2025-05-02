
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-[70vh] min-h-[500px] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
          Welcome to People's Church of Dover
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in">
          An Open and Affirming Congregation where all are welcome
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-church-600 hover:bg-church-700 text-white"
            asChild
          >
            <a href="#who-we-are">Learn More</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white border-white"
            asChild
          >
            <a href="#videos">Watch Online</a>
          </Button>
        </div>
        <div className="mt-12 bg-white bg-opacity-90 py-4 px-6 rounded-lg inline-block animate-fade-in">
          <p className="text-church-800 font-medium">Join us for worship every Sunday at 10:00 AM</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
