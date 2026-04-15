---
name: publicwww-search
description: Searches website source code via PublicWWW API to identify whether a cookie popup comes from a widely-used CMP provider or is site-specific. Use when investigating an unknown popup, checking if a selector or script URL appears across many sites, or deciding between a generic CMP rule and a site-specific rule.
---

# PublicWWW Search

## API

Requires `PUBLICWWW_API_KEY` env var.

```
https://publicwww.com/websites/{URL_ENCODED_QUERY}/?export=csvu&key=${PUBLICWWW_API_KEY}
```

Response: CSV with `url;rank` per line (semicolon delimiter).

**Rate limit:** 60 seconds between requests.
**Quota:** 100 searches per billing cycle (shared team key). Only search when needed.

Check remaining quota:
```
https://publicwww.com/profile/api_status.xml?key=${PUBLICWWW_API_KEY}
```

## Query Syntax

| Syntax | Meaning | Example |
|--------|---------|---------|
| `"phrase"` | Exact match | `"onetrust-banner-sdk"` |
| `-word` | Exclude | `"cookie-banner" -bootstrap` |
| `site:tld` | Filter by TLD | `"cookie-banner" site:de` |
| `depth:N` | Search depth (0=homepage, up to 5) | `depth:all "math.min.js"` |
| `\"` | Escaped quote inside phrase | `"<html lang=\"fr\">"` |

Default searches homepage HTML only. Use `depth:all` for internal pages.

## Workflow

1. Find a distinctive string from the popup — unique ID, class prefix, data attribute, or script URL (e.g. `didomi-notice`, `sp_choice_type`, `cdn.cookielaw.org`)
2. URL-encode the quoted phrase and query PublicWWW:
   ```bash
   curl -s "https://publicwww.com/websites/%22onetrust-banner-sdk%22/?export=csvu&key=${PUBLICWWW_API_KEY}" | wc -l
   ```
3. Interpret result count:

| Results | Meaning |
|---------|---------|
| 500+ | Major CMP. Check `rules/autoconsent/` and `lib/cmps/` for existing rule. |
| 10–500 | Smaller CMP. Worth a generic rule. |
| 1–10 | Likely site-specific, or very new CMP. Investigate further. |
| 0 | Try different selectors. See caveat below. |

## Caveats

- PublicWWW indexes **server-rendered HTML source only** — elements injected by JavaScript won't appear. CMP `<script>` tags and server-rendered containers will; dynamically created popups may not.
- Use the most distinctive string available. Unique IDs or class prefixes beat generic terms like "cookie" or "consent".
