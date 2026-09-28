# Project architecture

- Keep the three most recent UCC devotionals in one shared component rendered on both the homepage and meditation page, so entries and fallback remain consistent in both places.
- Keep church pages as React Router routes and internal navigation as router links, so navigation works under the configured base path.