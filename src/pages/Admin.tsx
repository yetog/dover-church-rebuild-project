import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Lock } from 'lucide-react';

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate('/admin/events', { replace: true });
      else setChecking(false);
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === 'signin') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate('/admin/events');
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: window.location.origin },
        });
        if (error) throw error;
        toast({
          title: 'Account created',
          description: 'Check your email to confirm your account. A site administrator still needs to approve staff access before you can edit events.',
        });
        setMode('signin');
      }
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  if (checking) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-church-50 dark:bg-[#1a0a17] px-4 py-16">
        <div className="w-full max-w-md bg-white dark:bg-church-800/30 rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-church-100 dark:bg-church-700 flex items-center justify-center">
              <Lock className="w-5 h-5 text-church-600 dark:text-church-300" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-church-800 dark:text-white">Staff Login</h1>
              <p className="text-sm text-church-500 dark:text-white/60">Manage What's Happening events</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
                autoComplete="email"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
                autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Please wait…' : mode === 'signin' ? 'Sign In' : 'Create Account'}
            </Button>
          </form>

          <p className="text-sm text-church-500 dark:text-white/60 mt-6 text-center">
            {mode === 'signin' ? (
              <>
                Need an account?{' '}
                <button type="button" onClick={() => setMode('signup')} className="text-church-600 dark:text-church-300 font-semibold hover:underline">
                  Request access
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button type="button" onClick={() => setMode('signin')} className="text-church-600 dark:text-church-300 font-semibold hover:underline">
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
