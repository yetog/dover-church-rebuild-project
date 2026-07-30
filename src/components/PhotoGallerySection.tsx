import React from 'react';

// Import stock images
import worshipImg from '@/assets/stock/worship-congregation.jpg';
import buildingImg from '@/assets/stock/church-building.jpg';
import fellowshipImg from '@/assets/stock/fellowship.jpg';
import choirImg from '@/assets/stock/choir.jpg';
import youthImg from '@/assets/stock/youth-group.jpg';
import volunteersImg from '@/assets/stock/volunteers.jpg';

const galleryImages = [
  { src: worshipImg, label: "Sunday Worship", size: "lg" },
  { src: buildingImg, label: "Our Church", size: "sm" },
  { src: fellowshipImg, label: "Fellowship", size: "sm" },
  { src: choirImg, label: "Music Ministry", size: "md" },
  { src: youthImg, label: "Youth Group", size: "md" },
  { src: volunteersImg, label: "Community Service", size: "sm" },
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
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`
                relative bg-church-200 dark:bg-church-800 rounded-lg overflow-hidden
                group cursor-pointer
                ${item.size === 'lg' ? 'col-span-2 row-span-2 aspect-square md:aspect-[2/1]' : ''}
                ${item.size === 'md' ? 'col-span-1 row-span-2 aspect-[1/2]' : ''}
                ${item.size === 'sm' ? 'col-span-1 aspect-square' : ''}
              `}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-church-400 dark:text-church-500 mt-6">
          Photos from Unsplash (royalty-free) - replace with actual church photos when available
        </p>
      </div>
    </section>
  );
};

export default PhotoGallerySection;
