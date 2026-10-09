import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();
    const body = `${message}\n\nFrom: ${name} (${email})`;
    window.location.href = `mailto:office@pcd-dover.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section id="contact" className="bg-white dark:bg-[#1a0a17]">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left: Contact Info */}
          <div className="py-16 md:py-24 px-4 md:px-8 lg:pr-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-church-500 dark:text-church-300 mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-church-800 dark:text-white mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-church-600 dark:text-white mb-10">
              We'd love to hear from you. Reach out with questions, prayer requests, or just to say hello.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-church-100 dark:bg-church-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-church-600 dark:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-church-800 dark:text-white mb-1">Address</h3>
                  <p className="text-church-600 dark:text-white">
                    46 South Bradford<br />
                    Dover, Delaware 19904
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-church-100 dark:bg-church-800 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-church-600 dark:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-church-800 dark:text-white mb-1">Phone</h3>
                  <p className="text-church-600 dark:text-white">
                    <a href="tel:3026744177" className="hover:text-cta transition-colors">(302) 674-4177</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-church-100 dark:bg-church-800 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-church-600 dark:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-church-800 dark:text-white mb-1">Email</h3>
                  <p className="text-church-600 dark:text-white">
                    <a href="mailto:office@pcd-dover.org" className="hover:text-cta transition-colors">office@pcd-dover.org</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-church-100 dark:bg-church-800 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-church-600 dark:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-church-800 dark:text-white mb-1">Office Hours</h3>
                  <p className="text-church-600 dark:text-white">
                    Monday - Friday: 9:00 AM - 3:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-church-100 dark:border-church-800">
              <h3 className="font-semibold text-church-800 dark:text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                   href="https://www.youtube.com/@PeoplesChurchDover/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                   aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-church-100 dark:bg-church-800 flex items-center justify-center hover:bg-church-600 hover:text-white transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="py-16 md:py-24 px-4 md:px-8 lg:pl-16 bg-church-50 dark:bg-[#0f0a10]">
            <h3 className="text-2xl font-bold text-church-800 dark:text-white mb-6">
              Send a Message
            </h3>

            <form className="space-y-5" onSubmit={sendMessage}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-church-700 dark:text-white mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-white dark:bg-church-800 border-church-200 dark:border-church-700"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-church-700 dark:text-white mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="Your email"
                    className="bg-white dark:bg-church-800 border-church-200 dark:border-church-700"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-church-700 dark:text-white mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Message subject"
                  className="bg-white dark:bg-church-800 border-church-200 dark:border-church-700"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-church-700 dark:text-white mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your message"
                  rows={5}
                  className="bg-white dark:bg-church-800 border-church-200 dark:border-church-700"
                />
              </div>

              <Button
                type="submit"
                className="w-full px-6 py-3 bg-church-800 dark:bg-church-600 text-white font-semibold rounded hover:bg-church-700 dark:hover:bg-church-500 transition-colors"
              >
                Open Email to Send
              </Button>
              <p className="text-sm text-church-600 dark:text-white">Your email app will open with your message ready to send.</p>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="h-80 md:h-96">
          <iframe
            title="Church Location"
            src="https://www.google.com/maps?q=46+South+Bradford+Street,+Dover,+DE+19904&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
