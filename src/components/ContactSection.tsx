
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-church-50">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          We'd love to hear from you! Reach out with any questions or prayer requests.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
          <div>
            <Card className="shadow-md h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-church-800 mb-6">Church Information</h3>
                
                <div className="space-y-6 flex-grow">
                  <div>
                    <h4 className="font-semibold text-church-700 mb-2">Address</h4>
                    <p className="text-church-600">
                      46 South Bradford<br />
                      Dover, Delaware 19904
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-church-700 mb-2">Worship Service</h4>
                    <p className="text-church-600">
                      Sundays at 10:00 AM
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-church-700 mb-2">Contact Information</h4>
                    <p className="text-church-600 mb-1">Office: (302) 674-4177</p>
                    <p className="text-church-600 mb-1">Facsimile: (302) 674-3423</p>
                    <p className="text-church-600 flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <a href="mailto:office@pcd-dover.org" className="hover:text-church-800 underline">
                        office@pcd-dover.org
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-church-700 mb-2">Connect With Us</h4>
                    <a 
                      href="https://www.facebook.com" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-church-600 hover:text-church-800"
                    >
                      <Facebook className="h-5 w-5 mr-2" />
                      <span>Follow us on Facebook</span>
                    </a>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-church-100">
                  <div className="bg-church-100 p-4 rounded-md">
                    <h4 className="font-semibold text-church-800 mb-2">Office Hours</h4>
                    <p className="text-church-600 mb-1">Monday - Friday: 9:00 AM - 3:00 PM</p>
                    <p className="text-church-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-church-800 mb-6">Send Us a Message</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-church-700 mb-1">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-church-700 mb-1">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email address"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-church-700 mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Message subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-church-700 mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message" 
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-church-600 hover:bg-church-700"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 max-w-5xl mx-auto rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Church Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3090.123456789!2d-75.52345678901234!3d39.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDA3JzI0LjQiTiA3NcKwMzEnMjQuNSJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="400"
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
