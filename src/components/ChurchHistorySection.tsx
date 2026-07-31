import React from 'react';

const milestones = [
  {
    year: "1909",
    title: "Church Founded",
    description: "On April 4, 1909, Dr. Lightbourne and approximately 250 members withdrew from Wesley Church and began holding Sunday meetings at the Opera House. The name 'People's' was selected on May 28, 1909.",
  },
  {
    year: "1909",
    title: "First Building",
    description: "The congregation established their home at 46 S. Bradford Street in downtown Dover, with a cornerstone reading '1909'.",
  },
  {
    year: "1923",
    title: "Church Rebuilt",
    description: "The historic building was rebuilt and expanded, as marked by a second cornerstone inscribed 'Rebuilt 1923'.",
  },
  {
    year: "Present",
    title: "People's Community Center",
    description: "Under Rev. Dr. G. Derrick Hodge's leadership, the church expanded its mission with the People's Community Center, serving homeless persons, children, youth, and those reintegrating into society.",
  },
];

const ChurchHistorySection = () => {
  return (
    <section className="section-padding bg-white dark:bg-[#1a0a17]">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-6">
              115+ Years of Faith & Service
            </h2>
            <div className="prose prose-church dark:prose-invert max-w-none space-y-4">
              <p className="text-lg text-church-600 dark:text-white/70 leading-relaxed">
                People's Church of Dover has a history of bold actions and expansive building programs.
                Founded in 1909, our congregation has been a cornerstone of the downtown Dover community
                for over 115 years.
              </p>
              <p className="text-church-600 dark:text-white/70 leading-relaxed">
                Today, People's Church is a congregationalist church committed to the wellbeing of
                struggling people in Dover. We work with homeless persons, children and youth,
                and formerly incarcerated people who need help reintegrating into society.
              </p>
              <p className="text-church-600 dark:text-white/70 leading-relaxed">
                As an Open and Affirming congregation of the United Church of Christ, we celebrate
                all who seek the experience of God's unconditional love and invite all to participate
                fully in the life of the church.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <div className="relative pl-8 border-l-2 border-church-200 dark:border-church-700">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative mb-10 last:mb-0">
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-church-600 border-4 border-white dark:border-[#1a0a17]" />
                  <div className="bg-church-50 dark:bg-church-800/30 rounded-lg p-5">
                    <span className="text-xs font-bold text-cta uppercase tracking-widest">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-bold text-church-800 dark:text-white mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-church-600 dark:text-white/60">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChurchHistorySection;
