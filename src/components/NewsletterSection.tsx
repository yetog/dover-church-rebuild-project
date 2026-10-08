import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, CheckCircle2 } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

const NewsletterSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedName || !trimmedEmail) {
      setError('Please enter your name and email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    const { error: insertError } = await supabase
      .from('newsletter_subscriptions')
      .insert({ name: trimmedName, email: trimmedEmail });
    setSubmitting(false);

    if (insertError) {
      setError('Something went wrong. Please try again, or email the church office at office@pcd-dover.org.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Church Newsletter</h2>
        <p className="section-subtitle">
          Stay connected with our congregation through our regular newsletter publications.
        </p>

        <div className="bg-church-50 p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-church-800 mb-2">Subscribe to the Newsletter</h3>
          <p className="text-center text-church-600 mb-6">
            Sign up to receive the current issue and future newsletters from People's Church of Dover.
          </p>

          {submitted ? (
            <div className="text-center py-4">
              <CheckCircle2 className="w-10 h-10 text-church-600 mx-auto mb-3" />
              <p className="text-church-800 font-semibold mb-1">You're subscribed!</p>
              <p className="text-church-600 text-sm">
                Thank you, {name.trim()}. We'll keep you updated with our newsletter.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="text-left">
                <Label htmlFor="newsletter-name" className="text-church-800">Name</Label>
                <Input
                  id="newsletter-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  className="mt-1"
                />
              </div>
              <div className="text-left">
                <Label htmlFor="newsletter-email" className="text-church-800">Email address</Label>
                <Input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="mt-1"
                />
              </div>
              {error && <p className="text-sm text-red-600 text-left">{error}</p>}
              <div className="text-center pt-2">
                <Button type="submit" disabled={submitting}>
                  <Mail className="w-4 h-4" />
                  {submitting ? 'Subscribing…' : 'Subscribe'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
