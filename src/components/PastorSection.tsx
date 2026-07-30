import React from 'react';
import { Mail, Phone } from 'lucide-react';

const PastorSection = () => {
  return (
    <section className="section-padding bg-church-50 dark:bg-[#0f0a10]">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-church-200 dark:bg-church-800 rounded-lg overflow-hidden flex items-center justify-center">
              {/* PLACEHOLDER: Replace with actual pastor photo */}
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-church-300 dark:bg-church-700 flex items-center justify-center">
                  <span className="text-4xl text-church-500 dark:text-church-400">?</span>
                </div>
                <p className="text-sm text-church-500 dark:text-church-400 font-medium">
                  Pastor Photo Needed
                </p>
                <p className="text-xs text-church-400 dark:text-church-500 mt-1">
                  Recommended: 800x1000px
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
              Our Pastor
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-2">
              {/* PLACEHOLDER: Replace with actual pastor name */}
              Rev. [Pastor Name]
            </h2>
            <p className="text-church-500 dark:text-church-400 mb-6">
              Senior Pastor
            </p>

            <div className="prose prose-church dark:prose-invert max-w-none mb-8">
              <p className="text-church-600 dark:text-white/70 leading-relaxed">
                {/* PLACEHOLDER: Replace with actual pastor bio */}
                [Pastor bio goes here. Include background, education, ministry experience,
                and vision for the church. 2-3 paragraphs recommended.]
              </p>
              <p className="text-church-600 dark:text-white/70 leading-relaxed">
                [Second paragraph about pastoral approach, family, or personal interests
                that help the congregation connect.]
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:pastor@pcd-dover.org"
                className="inline-flex items-center gap-2 text-sm font-semibold text-church-600 dark:text-church-300 hover:text-cta transition-colors"
              >
                <Mail className="w-4 h-4" />
                pastor@pcd-dover.org
              </a>
              <a
                href="tel:3026744177"
                className="inline-flex items-center gap-2 text-sm font-semibold text-church-600 dark:text-church-300 hover:text-cta transition-colors"
              >
                <Phone className="w-4 h-4" />
                (302) 674-4177
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastorSection;
