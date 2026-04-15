---
name: publicwww-search
description: Searches website source code via PublicWWW API to determine if a cookie popup comes from a widely-used CMP provider or is site-specific. Use when identifying whether a popup is from a third-party CMP.
---

# PublicWWW Search

Search the source code of websites to determine if a cookie consent popup comes from
a third-party CMP (Consent Management Platform) used across many sites, or is a
custom site-specific implementation.

## API

Base URL format:
```
https://publicwww.com/websites/{QUERY}/?export=csvu&key=PUBLICWWW_API_KEY
```

The query must be URL-encoded. Response is CSV with `url;rank` on each line.

**Rate limit:** Wait 60 seconds between requests.

**Quota:** 100 searches per billing cycle (shared team key). Use judiciously — only
search when you need to determine if a popup is from a CMP.

Check remaining quota:
```
https://publicwww.com/profile/api_status.xml?key=PUBLICWWW_API_KEY
```

## Query Syntax

| Syntax | Meaning | Example |
|--------|---------|---------|
| `"phrase"` | Exact match | `"onetrust-banner-sdk"` |
| `-word` | Exclude | `"cookie-banner" -bootstrap` |
| `site:tld` | Filter by TLD | `"cookie-banner" site:de` |
| `depth:N` | Search depth (0=homepage, up to 5) | `depth:all "math.min.js"` |
| `\"` | Escaped quote inside phrase | `"<html lang=\"fr\">"` |

By default, PublicWWW searches homepage HTML only. Use `depth:all` to search internal
pages too.

## When to Use

When you find a cookie consent popup and need to determine if it's from a CMP:

1. Find a distinctive selector from the popup's DOM — a unique ID, class prefix, or
   data attribute (e.g. `didomi-notice`, `sp_choice_type`, `fc-consent-root`)
2. Search PublicWWW for that selector
3. Count the results

## Interpreting Results

| Result count | Likely meaning |
|-------------|----------------|
| 500+ sites | Major CMP provider. Check `rules/autoconsent/` and `lib/cmps/` for existing rule. |
| 10-500 sites | Smaller CMP. Worth creating a generic rule. |
| 1-10 sites | Probably site-specific, or a very new CMP. Investigate further. |
| 0 results | Try different selectors. PublicWWW only indexes server-rendered HTML, not JS-injected DOM. |

## Example Query

Search for a CMP's container ID (URL-encode the quoted phrase as `%22...%22`):
```bash
curl -s "https://publicwww.com/websites/%22onetrust-banner-sdk%22/?export=csvu&key=PUBLICWWW_API_KEY" | wc -l
```

Use the same pattern for script URLs (`"cdn.cookielaw.org"`), class prefixes (`"didomi-notice-agree-button"`), or any distinctive string from the popup.

## Important Notes

- PublicWWW indexes **server-rendered HTML source**, not the rendered DOM. Elements
  injected by JavaScript after page load won't appear. CMP script tags and
  server-rendered containers will appear, but dynamically created popups may not.
- Use the most distinctive string you can find. A unique ID or class prefix is better
  than generic terms like "cookie" or "consent".
- The column delimiter is `;` (semicolon). Each row is `url;rank`.
