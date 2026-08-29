import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Calendar, MapPin, Clock, Pencil, Trash2, Plus, LogOut } from 'lucide-react';

type Event = {
  id: string;
  title: string;
  event_date: string;
  event_time: string | null;
  location: string | null;
  category: string;
  description: string | null;
  featured: boolean;
  published: boolean;
};

const emptyForm = {
  title: '',
  event_date: '',
  event_time: '',
  location: '',
  category: 'Special',
  description: '',
  featured: false,
  published: true,
};

const categories = ['Worship', 'Fellowship', 'Youth', 'Education', 'Special'];

const AdminEvents = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [events, setEvents] = useState<Event[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('event_date', { ascending: true });
    if (error) {
      toast({ title: 'Could not load events', description: error.message, variant: 'destructive' });
    } else {
      setEvents(data as Event[]);
    }
  };

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/admin', { replace: true });
        return;
      }
      setUserEmail(session.user.email ?? '');
      const { data: roles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id);
      const isStaff = (roles ?? []).some((r: any) => r.role === 'staff' || r.role === 'admin');
      setAuthorized(isStaff);
      if (isStaff) await fetchEvents();
      setLoading(false);
    };
    init();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const payload = {
      title: form.title,
      event_date: form.event_date,
      event_time: form.event_time || null,
      location: form.location || null,
      category: form.category,
      description: form.description || null,
      featured: form.featured,
      published: form.published,
    };
    try {
      if (editingId) {
        const { error } = await supabase.from('events').update(payload).eq('id', editingId);
        if (error) throw error;
        toast({ title: 'Event updated' });
      } else {
        const { error } = await supabase.from('events').insert(payload);
        if (error) throw error;
        toast({ title: 'Event added' });
      }
      setForm(emptyForm);
      setEditingId(null);
      await fetchEvents();
    } catch (error: any) {
      toast({ title: 'Save failed', description: error.message, variant: 'destructive' });
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (event: Event) => {
    setEditingId(event.id);
    setForm({
      title: event.title,
      event_date: event.event_date,
      event_time: event.event_time ?? '',
      location: event.location ?? '',
      category: event.category,
      description: event.description ?? '',
      featured: event.featured,
      published: event.published,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this event?')) return;
    const { error } = await supabase.from('events').delete().eq('id', id);
    if (error) {
      toast({ title: 'Delete failed', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Event deleted' });
      fetchEvents();
    }
  };

  if (loading) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-church-50 dark:bg-[#1a0a17] py-12 px-4">
        <div className="container-max max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-black text-church-800 dark:text-white">Manage Events</h1>
              <p className="text-sm text-church-500 dark:text-white/60">Signed in as {userEmail}</p>
            </div>
            <Button variant="outline" onClick={handleSignOut} className="gap-2">
              <LogOut className="w-4 h-4" /> Sign Out
            </Button>
          </div>

          {!authorized ? (
            <div className="bg-white dark:bg-church-800/30 rounded-lg p-8 text-center">
              <h2 className="text-lg font-bold text-church-800 dark:text-white mb-2">Access pending</h2>
              <p className="text-church-600 dark:text-white/60">
                Your account is signed in, but it hasn't been granted staff access yet. Please contact the site administrator to approve your account.
              </p>
            </div>
          ) : (
            <>
              {/* Event form */}
              <form onSubmit={handleSubmit} className="bg-white dark:bg-church-800/30 rounded-lg p-6 mb-10 space-y-4">
                <h2 className="text-lg font-bold text-church-800 dark:text-white flex items-center gap-2">
                  <Plus className="w-5 h-5" /> {editingId ? 'Edit Event' : 'Add New Event'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input id="title" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="date">Date *</Label>
                    <Input id="date" type="date" required value={form.event_date} onChange={(e) => setForm({ ...form, event_date: e.target.value })} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="time">Time</Label>
                    <Input id="time" placeholder="e.g. 10:00 AM" value={form.event_time} onChange={(e) => setForm({ ...form, event_time: e.target.value })} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="e.g. Fellowship Hall" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="mt-1" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="featured" checked={form.featured} onCheckedChange={(v) => setForm({ ...form, featured: v })} />
                    <Label htmlFor="featured">Featured event</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="published" checked={form.published} onCheckedChange={(v) => setForm({ ...form, published: v })} />
                    <Label htmlFor="published">Visible on website</Label>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button type="submit" disabled={saving}>
                    {saving ? 'Saving…' : editingId ? 'Save Changes' : 'Add Event'}
                  </Button>
                  {editingId && (
                    <Button type="button" variant="outline" onClick={() => { setEditingId(null); setForm(emptyForm); }}>
                      Cancel
                    </Button>
                  )}
                </div>
              </form>

              {/* Events list */}
              <div className="space-y-3">
                {events.length === 0 && (
                  <p className="text-center text-church-500 dark:text-white/60 italic">No events yet. Add the first one above.</p>
                )}
                {events.map((event) => (
                  <div key={event.id} className="bg-white dark:bg-church-800/30 rounded-lg p-5 flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded bg-church-100 text-church-700 dark:bg-church-700 dark:text-church-200">
                          {event.category}
                        </span>
                        {event.featured && (
                          <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">Featured</span>
                        )}
                        {!event.published && (
                          <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300">Hidden</span>
                        )}
                      </div>
                      <h3 className="font-bold text-church-800 dark:text-white">{event.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-church-500 dark:text-white/60 mt-1">
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{event.event_date}</span>
                        {event.event_time && <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{event.event_time}</span>}
                        {event.location && <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{event.location}</span>}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(event)} className="gap-1">
                        <Pencil className="w-4 h-4" /> Edit
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(event.id)} className="gap-1 text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" /> Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminEvents;
