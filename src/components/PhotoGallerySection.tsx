import React from 'react';
import { ImageIcon } from 'lucide-react';

const galleryPlaceholders = [
  { label: "Worship Service", size: "lg", description: "Congregation during Sunday worship" },
  { label: "Church Building", size: "sm", description: "Exterior or interior shot" },
  { label: "Fellowship", size: "sm", description: "Coffee hour or community event" },
  { label: "Choir", size: "md", description: "Choir during performance" },
  { label: "Youth Group", size: "md", description: "Youth activities or events" },
  { label: "Community Event", size: "sm", description: "Outreach or special event" },
];

const PhotoGallerySection = () => {
  return (
    <section className="section-padding bg-church-50 dark:bg-[#0f0a10]">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
            Our Community
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-4">
            Life at People's Church
          </h2>
          <p className="text-lg text-church-600 dark:text-white/70 max-w-2xl mx-auto">
            See what worship, fellowship, and community look like at our church.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryPlaceholders.map((item, index) => (
            <div
              key={index}
              className={`
                relative bg-church-200 dark:bg-church-800 rounded-lg overflow-hidden
                flex items-center justify-center
                ${item.size === 'lg' ? 'col-span-2 row-span-2 aspect-square md:aspect-[2/1]' : ''}
                ${item.size === 'md' ? 'col-span-1 row-span-2 aspect-[1/2]' : ''}
                ${item.size === 'sm' ? 'col-span-1 aspect-square' : ''}
              `}
            >
              {/* PLACEHOLDER: Replace with actual images */}
              <div className="text-center p-4">
                <ImageIcon className="w-10 h-10 mx-auto mb-2 text-church-400 dark:text-church-600" />
                <p className="text-sm font-medium text-church-500 dark:text-church-400">
                  {item.label}
                </p>
                <p className="text-xs text-church-400 dark:text-church-500 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-church-400 dark:text-church-500 mt-6 italic">
          6 photos needed - replace placeholders with actual church photos
        </p>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
