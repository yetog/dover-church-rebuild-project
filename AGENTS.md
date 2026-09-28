# Project architecture

- Keep the UCC devotional preview in one shared component rendered on both the homepage and meditation page, so the same daily entry and fallback appear in both places.
- Keep church pages as React Router routes and internal navigation as router links, so navigation works under the configured base path.