# Project architecture

- Keep the three most recent UCC devotionals in one shared component rendered on both the homepage and meditation page, so entries and fallback remain consistent in both places.
- Keep church pages as React Router routes and internal navigation as router links, so navigation works under the configured base path.
- Handle page-entry scrolling once inside the router, while preserving hash targets, so every internal page opens predictably at the top.
- Point every link that opens video content at one shared value instead of per-page URLs, so the whole site retargets from a single edit.