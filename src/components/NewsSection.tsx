import React from 'react';
import childrenYouth1 from '@/assets/programs/children-youth-1.jpg';
import childrenYouth2 from '@/assets/programs/children-youth-2.jpg';
import veterans1 from '@/assets/programs/veterans-1.jpg';
import neighborsImg from '@/assets/programs/neighbors-in-need-1.jpg';

const posts = [
  {
    id: 1,
    date: 'September 12, 2022',
    title: 'Community Center Opens New Youth Programs',
    excerpt: 'The Center for Children and Youth is expanding its after-school programming this fall with new mentorship opportunities.',
    image: childrenYouth1,
  },
  {
    id: 2,
    date: 'September 12, 2022',
    title: 'Neighbors in Need Fall Food Drive',
    excerpt: "Join us this October as we collect non-perishable food items for families facing hardship in the Dover community.",
    image: neighborsImg,
  },
  {
    id: 3,
    date: 'September 12, 2022',
    title: 'Honoring Our Veterans This November',
    excerpt: "People's Church will host a special service of recognition and gratitude for all who have served our country.",
    image: veterans1,
  },
  {
    id: 4,
    date: 'September 12, 2022',
    title: 'Sunday Worship Returns to Full Capacity',
    excerpt: 'We are overjoyed to welcome our full congregation back together for in-person worship every Sunday at 10:00 AM.',
    image: childrenYouth2,
  },
];

const NewsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {posts.map(post => (
            <article key={post.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-church-500 text-xs mb-2">{post.date}</p>
                <h3 className="font-heading font-bold text-church-800 text-sm mb-2 leading-snug">{post.title}</h3>
                <p className="text-church-600 text-xs leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                <a href="#" className="text-cta text-xs font-semibold hover:underline">Read More »</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
