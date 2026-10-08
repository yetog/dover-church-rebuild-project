CREATE TABLE public.newsletter_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.newsletter_subscriptions TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.newsletter_subscriptions TO authenticated;
GRANT ALL ON public.newsletter_subscriptions TO service_role;

ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to the newsletter"
ON public.newsletter_subscriptions
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Authenticated users can view subscriptions"
ON public.newsletter_subscriptions
FOR SELECT
TO authenticated
USING (true);