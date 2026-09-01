import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import aboutBanner from '@/assets/photos/Who_we_are.jpg';

const UCC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageHeader
        title="United Church of Christ"
        subtitle="United in Christ's love, a just world for all."
        breadcrumb={[
          { label: 'About', href: '/about' },
          { label: 'UCC', href: '/ucc' },
        ]}
        image={aboutBanner}
        imageAlt="Stained glass window at People's Church of Dover"
      />
      <main className="flex-1">
        <section className="section-padding bg-church-50 dark:bg-[#0f0a10]">
          <div className="container-max">
            <div className="max-w-3xl space-y-6 text-church-700 dark:text-white/70 leading-relaxed">
              <p>
                The United Church of Christ lists their Vision Statement as <strong className="text-church-800 dark:text-white">United in Christ&rsquo;s love, a just world for all.</strong> Their Mission statement is <strong className="text-church-800 dark:text-white">United in Spirit and inspired by God&rsquo;s grace, we welcome all, love all, and seek justice for all.</strong>
              </p>
              <p>
                The United Church of Christ (UCC) is a distinct and diverse community of Christians that come together as one church to join faith and action. With over 5,000 churches and nearly one million members across the U.S., the UCC serves God in the co-creation of a just and sustainable world. The UCC is a church of firsts, a church of extravagant welcome, and a church where &ldquo;&hellip;they may all be one&rdquo; (John 17:21).
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-300 dark:bg-[#1a0a17]">
          <div className="container-max">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-8">
                The Church of Firsts
              </h2>
              <div className="space-y-6 text-church-700 dark:text-white/70 leading-relaxed">
                <p>
                  Since 1957, the United Church of Christ has been the church of firsts, weaving God&rsquo;s message of hope and extravagant welcome with action for justice and peace. Together, we live out our faith in ways that effect change in our communities. The UCC&rsquo;s many &ldquo;firsts&rdquo; mean that we have inherited a tradition of acting upon the demands of our faith. When we read in Galatians: &ldquo;There is no longer Jew or Greek, there is no longer slave or free, there is no longer male and female; for all of you are one in Christ Jesus&rdquo; &mdash; a demand is made upon us. And so we were the first historically white denomination to ordain an African-American, the first to ordain a woman, the first to ordain an openly gay man, and the first Christian church to affirm the right of same-gender couples to marry. We were in the forefront of the anti-slavery movement and the Civil Rights movement. Our response to the demands of our faith is woven into the history of our country.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-church-50 dark:bg-[#0f0a10]">
          <div className="container-max">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-8">
                A Church of Extravagant Welcome
              </h2>
              <div className="space-y-6 text-church-700 dark:text-white/70 leading-relaxed">
                <p>
                  Today, we continue to change lives throughout the world. We work alongside more than 200 mission partners. We labor ceaselessly to fight injustice, in the United States and abroad. We instill our vision into our youth and young adults, forging leaders who will imagine new dreams. And we sustain and develop church leaders, pastors, and our local churches to live their faith in exciting new ways. We believe in a God that is still speaking, a God that is all-loving and inclusive. We are a church that welcomes and accepts everyone as they are, where your mind is nourished as much as your soul.
                </p>
                <p className="text-lg font-semibold text-church-800 dark:text-white">
                  We are a church where Jesus the healer meets Jesus the revolutionary, and where together, we grow a just and peaceful world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UCC;
