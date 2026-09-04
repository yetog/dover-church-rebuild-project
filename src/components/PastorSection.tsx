import React from 'react';
import { Mail, Phone } from 'lucide-react';
import pastorImg from '@/assets/staff/rev-hodge.jpg';

const PastorSection = () => {
  return (
    <section className="section-padding bg-church-50 dark:bg-[#0f0a10]">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src={pastorImg}
                alt="Rev. Dr. G. Derrick Hodge"
                loading="lazy"
                className="w-full h-full object-cover object-[50%_20%]"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
              Our Pastor
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-2">
              Rev. Dr. G. Derrick Hodge
            </h2>
            <p className="text-church-500 dark:text-church-400 mb-6">
              Senior Pastor & Executive Director, People's Community Center
            </p>

            <div className="prose prose-church dark:prose-invert max-w-none mb-8 space-y-4">
              <p className="text-church-600 dark:text-white/70 leading-relaxed">
                Rev. Dr. G. Derrick Hodge is a cultural anthropologist who has dedicated his career
                to building relationships across diverse communities. He holds a Ph.D. and has authored
                books and academic articles on economic and medical anthropology, as well as works
                addressing multiculturalism and cross-racial ministry.
              </p>
              <p className="text-church-600 dark:text-white/70 leading-relaxed">
                Over the past eight years, Pastor Hodge has focused on helping congregations revitalize
                through community engagement. He currently serves as both Pastor of People's Church of Dover
                and Executive Director of the People's Community Center, leading efforts to serve those
                less fortunate in the downtown Dover area.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:office@pcd-dover.org"
                className="inline-flex items-center gap-2 text-sm font-semibold text-church-600 dark:text-church-300 hover:text-cta transition-colors"
              >
                <Mail className="w-4 h-4" />
                office@pcd-dover.org
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
