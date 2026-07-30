import React from 'react';

const milestones = [
  {
    year: "[Year]",
    title: "Church Founded",
    description: "[Description of founding, original location, founding members]",
  },
  {
    year: "[Year]",
    title: "Current Building",
    description: "[Description of moving to or building the current church location]",
  },
  {
    year: "[Year]",
    title: "Joined UCC",
    description: "[Description of joining the United Church of Christ denomination]",
  },
  {
    year: "[Year]",
    title: "Open and Affirming",
    description: "[Description of becoming an Open and Affirming congregation]",
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
              Our History
            </h2>
            <div className="prose prose-church dark:prose-invert max-w-none">
              <p className="text-lg text-church-600 dark:text-white/70 leading-relaxed mb-6">
                {/* PLACEHOLDER: Replace with actual church history */}
                [Opening paragraph about the church's history and significance to the Dover community.
                When was it founded? By whom? What was the original vision?]
              </p>
              <p className="text-church-600 dark:text-white/70 leading-relaxed">
                [Second paragraph about growth, challenges overcome, and key moments in the church's journey.
                Mention important pastors, building projects, or community initiatives.]
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
            <p className="text-xs text-church-400 dark:text-church-500 mt-6 pl-8 italic">
              Timeline placeholder - replace with actual dates and events
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChurchHistorySection;
