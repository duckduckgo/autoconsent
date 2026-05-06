---
name: publicwww-search
description: Search PublicWWW to find websites using specific HTML/JS/CSS snippets. Use this skill to check if a cookie popup is from a widespread third-party CMP, to find additional test URLs for a CMP rule, or to discover how many sites use a particular consent banner pattern.
---

# PublicWWW Source Code Search

Search website source code via the [PublicWWW](https://publicwww.com) API. Requires `PUBLICWWW_KEY` env var.

**Caveat:** PublicWWW indexes server-rendered HTML source only. CMPs injected purely via client-side JavaScript (e.g. tag managers, async script loaders) may not appear in results.

## API

Download search results as CSV:

```
https://publicwww.com/websites/SEARCH_QUERY/?export=csvsnippetsu&key=$PUBLICWWW_KEY
```

CSV format: `url;rank;snippet` (one site per line, sorted by popularity rank).

Use `export=csv` instead of `csvsnippetsu` to get `domain;rank` without snippets.

## Query Syntax

- Exact phrase: `"onetrust-banner-sdk"`
- Combine terms: `"cookie-banner" "reject-all"`
- Exclude: `"cookie-banner" -wordpress`
- TLD filter: `"sd-cmp" site:de`
- File type: `"__cmp" filetype:js` (also `filetype:css`)
- Page depth: `depth:all "math.min.js"` (0–5, default homepage only)
- Escape inner quotes: `"data-testid=\"cookie-reject\""`

Full syntax: https://publicwww.com/syntax.html

## Examples

Check if a banner ID is from a shared CMP:

```bash
curl -s "https://publicwww.com/websites/%22sd-cmp%22/?export=csv&key=$PUBLICWWW_KEY" | head -20
```

Find German sites using OneTrust:

```bash
curl -s "https://publicwww.com/websites/%22onetrust-banner-sdk%22+site%3Ade/?export=csv&key=$PUBLICWWW_KEY" | head -10
```

Search JS files for a CMP API:

```bash
curl -s "https://publicwww.com/js/%22__cmp%22+filetype%3Ajs/?export=csv&key=$PUBLICWWW_KEY" | head -10
```
