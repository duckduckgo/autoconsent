---
name: searchwebcode-search
description: Search SearchWebCode to find websites whose homepage HTML contains a specific snippet. Fallback for publicwww-search, for the same uses (is a cookie popup from a widespread third-party CMP, more test URLs for a CMP rule, how many sites use a consent banner pattern). Use only when PublicWWW has run out of its daily limit; use publicwww-search otherwise.
---

# SearchWebCode Source Code Search (PublicWWW fallback)

Search website source code via the [SearchWebCode](https://www.searchwebcode.com) API. Requires the `SEARCHWEBCODE_KEY` env var.

**Use the `publicwww-search` skill first.** Switch to this skill only when PublicWWW has run out of its daily allowance (see [When to fall back](#when-to-fall-back)). The uses are the same: check whether a popup comes from a shared CMP, find more sites for a rule's spec file or for a region, and estimate how widespread a banner pattern is. Once you have switched, keep using this skill for the rest of the task, since the PublicWWW limit only resets the next day.

**Caveats:**

- SearchWebCode indexes the raw HTML of **one homepage per site** (131M+ sites). It does not index JS or CSS files or deeper pages, so there is no equivalent of PublicWWW's `filetype:js` or `depth:`. CMPs injected purely by client-side JavaScript will not appear.
- When a banner is injected by a script, search the CMP's script host (the `src` of that script) rather than the banner's ID or class.
- Its homepage snapshot can lack a string the live site has, even on large, well-known sites that are indexed. A site missing from the results is not evidence that it doesn't use the CMP. To check one site, fetch its homepage.
- Each new listing query costs credit (see [Cost](#cost)). Use `counts_only` when you only need the number of sites: it is free.

## When to fall back

Fall back when PublicWWW's daily search limit is used up. Its CSV export then answers with HTTP 200 and the body `API available for paid search results only` instead of `url;rank;snippet` lines, so check the response body before reading it as results. To confirm, check the remaining quota (this request is free):

```bash
curl -s https://api.publicwww.com/v1/account -H "Authorization: Bearer $PUBLICWWW_KEY" | jq .quota.searches
```

`remaining: 0` means the limit is used up until `resets_at` (Unix time, midnight UTC).

Do not fall back when:

- PublicWWW returns an empty CSV: that is a real "no sites found" answer.
- PublicWWW answers `Wrong API key`, or `PUBLICWWW_KEY` is not set: ask the user for a working key instead.

Before the first call, check that the key is set (`[ -n "$SEARCHWEBCODE_KEY" ]`). If it is not, there is no fallback. Continue with `data/coverage.json` and the spec sites, and say in your report that source code search was unavailable.

Say in your report that the results came from SearchWebCode, so reviewers know they cover homepages only.

## API

Base URL `https://www.searchwebcode.com/api/v1`, authenticated with `Authorization: Bearer $SEARCHWEBCODE_KEY`.

```
GET /api/v1/search?q=QUERY[&tld=de][&limit=100][&offset=N][&regex=true][&ignore_case=true][&counts_only=true]
```

| Parameter | Default | Notes |
|---|---|---|
| `q` | required | Query (see [Query Syntax](#query-syntax)) |
| `tld` | any | Top-level domain, e.g. `de`. Same as `site:de` in `q` |
| `limit` | 100 | 1 to 256 results per page |
| `offset` | 0 | Pass the previous response's `next_offset` for the next page. No `next_offset` means the end |
| `regex` | false | Treat `q` as a regex. Not combinable with `ignore_case` |
| `ignore_case` | false | Case-insensitive matching, plain queries only |
| `counts_only` | false | Return only the count. Free of credits |

The JSON response has `total`, `count_kind`, `next_offset`, `charged_cents`, `balance_cents` and `results[]`. Each result has `domain`, `url`, `tld`, `rank`, `occurrences` and `snippet` (`text`, `match_start`, `match_end`). Results are sorted by popularity rank, like PublicWWW.

- Each subdomain is its own site, and `www` and non-`www` can appear separately. Dedupe by registrable domain before counting sites or picking spec URLs.
- `rank` is SearchWebCode's own scale (up to tens of millions) and can't be compared with PublicWWW's ranks. The top sites differ a lot between the two services.
- Pages after the first come back `count_kind: partial` with no `estimated_matches`, so read counts from the first page.

`count_kind` says how far to trust `total`:

- `exact`: the true number of matching sites.
- `estimated`: a candidate count. Read `estimated_matches` instead.
- `partial`: only a ceiling. Only `verified_hits` are confirmed. `counts_only` requests usually come back `partial`.

For plain (non-regex) queries the free `counts_only` total is as good as a listing's `estimated_matches`: equal for token queries and within about 10% for substring ones. Don't pay for a listing just to get a count. Treat any count as an order of magnitude: it can differ from PublicWWW's count for the same query by a factor of 3 either way.

Regex counts are not usable. A regex `counts_only` total is a prefilter ceiling, up to 1,000× too high, and a regex listing's `estimated_matches` is also unreliable (it can be lower than the plain query's count). Each regex page verifies only 256 candidates, so a page can return just a few hits. Page with `next_offset` (free) to collect sites, and don't quote regex counts.

The response's `match_mode` (`token`, `substring` or `regex`) and `prefilter_note` say how the query was matched. Read them when a count looks too low or too high.

Full reference: https://www.searchwebcode.com/docs

## Query Syntax

Mostly the same as PublicWWW, so a PublicWWW query usually works unchanged once you drop `filetype:` and `depth:`. The big difference is token matching.

- **Identifiers match as whole tokens, even when quoted.** `"sd-cmp"` and `"onetrust-banner-sdk"` (letters, digits, `-`, `_`) match only as a whole token, in the case given: `"sd-cmp"` finds `id="sd-cmp"` but not `ads-cmp`. That is usually what you want for a CMP's class or ID. The response says `match_mode: "token"`.
- This differs from PublicWWW, which treats `-` as a word separator: its `"sd-cmp"` also matches generated classes like `sd-cmp-1HEM-`, but SearchWebCode's does not, and finds several times fewer sites. When a CMP uses prefixed or generated class names, search the prefix as a regex: `/sd-cmp-/`.
- For any other substring match inside longer tokens, use a regex too: `/sd-cmp/`. Expect noisier matches, and see the regex notes under `count_kind` above.
- Strings with other punctuation (`.`, `/`, `=`, spaces) match as substrings: `"cdn.cookielaw.org/scripttemplates"` (`match_mode: "substring"`)
- Combine terms (AND): `"cookie-banner" "reject-all"` (or uppercase `AND`)
- Either term: `"cmp-a" OR "cmp-b"` (or `|`)
- Exclude: `"cookie-banner" -"wordpress"` (or `NOT`). A query needs at least one positive term
- Grouping: `("a" OR "b") -"c"`
- TLD filter: `"sd-cmp" site:de` (alias `tld:`, exclude with `-site:de`). Only TLDs, not full domains
- Regex: `/cookie-?consent-banner/` in `q`, or `regex=true` with a bare pattern (see [Regex](#regex))
- Escape inner quotes: `"data-testid=\"cookie-reject\""`. Only `\"` and `\\` are escapes

`AND`, `OR` and `NOT` are operators only in uppercase.

### Regex

PublicWWW has no regex, so use it to search for things PublicWWW can't express: generated class names, the shape of an attribute value, or two attributes near each other.

- Supported: character classes, `{n}`, `\d` and `\w`, alternation `|`, groups, escaped `\.` and `\/`, quotes, and bounded spans like `.{0,80}`. For example `/sd-cmp-[A-Za-z0-9_]{5}/`, `/data-cbid="[0-9a-f]{8}-/` and `/id="usercentrics-cmp".{0,80}data-settings-id/`.
- Not supported: look-ahead, look-behind and backreferences. They return HTTP 400, which is not charged.
- Matching is case-sensitive. Write the exact case, or list the variants with `|`. Don't use `(?i)`: it is accepted but turns off the index lookup, so only a handful of hits come back. `ignore_case` can't be combined with regex.
- Keep a long fixed part in the pattern. Each page checks only 256 candidate sites, so a pattern with a long literal part fills its pages, while a short or loose one returns a few hits per page and only about 180 sites across all the free pages.

Full syntax: https://www.searchwebcode.com/syntax

## Cost

- A new listing query costs one credit (5¢, see `charged_cents`, balance in `balance_cents`).
- Paging that query with `next_offset`, or re-running it with a different `limit`, within 24 hours is free (up to 25 more requests).
- `counts_only=true` is free, but counts towards the daily request cap.
- **402** means out of credits and **429** means a throughput or daily cap (daily caps reset at midnight UTC). Stop and tell the user. Do not retry in a loop. A 429 with `Retry-After` may be retried once after that delay.
- 400 is an invalid query (e.g. no positive term, `regex` with `ignore_case`). It is not charged.

## Examples

`curl -G` with `--data-urlencode` takes care of URL-encoding the query.

Check if a banner ID is from a shared CMP (free count first):

```bash
curl -sG "https://www.searchwebcode.com/api/v1/search" \
  -H "Authorization: Bearer $SEARCHWEBCODE_KEY" \
  --data-urlencode 'q="didomi-host"' --data-urlencode 'counts_only=true' \
  | jq '{error, total, count_kind}'
```

List the top sites with snippets, in the same `url;rank;snippet` shape as PublicWWW:

```bash
curl -sG "https://www.searchwebcode.com/api/v1/search" \
  -H "Authorization: Bearer $SEARCHWEBCODE_KEY" \
  --data-urlencode 'q="didomi-host"' --data-urlencode 'limit=20' \
  | jq -r '.error // empty, (.results[]? | [.url, .rank, .snippet.text] | join(";"))'
```

Find sites with a generated class name (`sd-cmp-1HEM-...`), using a regex on its prefix. Collect sites from the results, not the count:

```bash
curl -sG "https://www.searchwebcode.com/api/v1/search" \
  -H "Authorization: Bearer $SEARCHWEBCODE_KEY" \
  --data-urlencode 'q=/sd-cmp-/' --data-urlencode 'limit=100' \
  | jq -r '.error // empty, "next_offset: \(.next_offset)", (.results[]? | [.domain, .rank] | join(";"))'
```

Find German sites using OneTrust:

```bash
curl -sG "https://www.searchwebcode.com/api/v1/search" \
  -H "Authorization: Bearer $SEARCHWEBCODE_KEY" \
  --data-urlencode 'q="onetrust-banner-sdk"' --data-urlencode 'tld=de' --data-urlencode 'limit=10' \
  | jq -r '.error // empty, (.results[]? | [.domain, .rank] | join(";"))'
```

Find sites loading a CMP script from its CDN (the homepage HTML has the `<script src>` even though the JS file itself is not indexed):

```bash
curl -sG "https://www.searchwebcode.com/api/v1/search" \
  -H "Authorization: Bearer $SEARCHWEBCODE_KEY" \
  --data-urlencode 'q="cdn.cookielaw.org/scripttemplates"' --data-urlencode 'limit=10' \
  | jq -r '.error // empty, (.results[]? | [.domain, .rank] | join(";"))'
```

On an HTTP error these print the `error` message instead of results. Add `-w '\n%{http_code}\n'` without the `jq` pipe to see the status code too.
