---
name: searchwebcode-search
description: Search SearchWebCode to find websites whose homepage HTML contains a specific snippet. Fallback for publicwww-search, for the same uses (is a cookie popup from a widespread third-party CMP, more test URLs for a CMP rule, how many sites use a consent banner pattern). Use only when PublicWWW has run out of its daily limit; use publicwww-search otherwise.
---

# SearchWebCode Source Code Search (PublicWWW fallback)

Search website source code via the [SearchWebCode](https://www.searchwebcode.com) API. Requires the `SEARCHWEBCODE_KEY` env var.

**Use the `publicwww-search` skill first.** Switch to this skill only when PublicWWW has run out of its daily allowance (see [When to fall back](#when-to-fall-back)). The uses are the same: check whether a popup comes from a shared CMP, find more sites for a rule's spec file or for a region, and estimate how widespread a banner pattern is. Once you have switched, keep using this skill for the rest of the task, since the PublicWWW limit only resets the next day.

**Caveats:**

- SearchWebCode indexes the raw HTML of **one homepage per site** (131M+ sites). It does not index JS or CSS files or deeper pages, so there is no equivalent of PublicWWW's `filetype:js` or `depth:`. CMPs injected purely by client-side JavaScript will not appear.
- Each search costs a credit (see [Cost](#cost)). Use `counts_only` when you only need the number of sites.

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

`count_kind` says how far to trust `total`:

- `exact`: the true number of matching sites.
- `estimated`: a candidate count. Read `estimated_matches` instead.
- `partial`: only a ceiling. Only `verified_hits` are confirmed. `counts_only` requests usually come back `partial`, and for regex queries the ceiling can be far too high (a prefilter count). If the number matters, run a listing (one credit) and read `estimated_matches` and `verified_hits`. For a listing that is `partial`, narrow the query (add a term or a TLD) rather than paging through it.

The response's `match_mode` (`token`, `substring` or `regex`) and `prefilter_note` say how the query was matched. Read them when a count looks too low or too high.

Full reference: https://www.searchwebcode.com/docs

## Query Syntax

Mostly the same as PublicWWW, so a PublicWWW query usually works unchanged once you drop `filetype:` and `depth:`. The big difference is token matching.

- **Identifiers match as whole tokens, even when quoted.** `"sd-cmp"` and `"onetrust-banner-sdk"` (letters, digits, `-`, `_`) match only as a whole token, in the case given: `"sd-cmp"` finds `id="sd-cmp"` but not `ads-cmp`. That is usually what you want for a CMP's class or ID. The response says `match_mode: "token"`.
- For a substring match inside longer tokens, use a regex: `/sd-cmp/`. Expect many more, noisier matches.
- Strings with other punctuation (`.`, `/`, `=`, spaces) match as substrings: `"cdn.cookielaw.org/scripttemplates"` (`match_mode: "substring"`)
- Combine terms (AND): `"cookie-banner" "reject-all"` (or uppercase `AND`)
- Either term: `"cmp-a" OR "cmp-b"` (or `|`)
- Exclude: `"cookie-banner" -"wordpress"` (or `NOT`). A query needs at least one positive term
- Grouping: `("a" OR "b") -"c"`
- TLD filter: `"sd-cmp" site:de` (alias `tld:`, exclude with `-site:de`). Only TLDs, not full domains
- Regex: `/cookie-?consent-banner/` in `q`, or `regex=true` with a bare pattern
- Escape inner quotes: `"data-testid=\"cookie-reject\""`. Only `\"` and `\\` are escapes

`AND`, `OR` and `NOT` are operators only in uppercase.

Full syntax: https://www.searchwebcode.com/syntax

## Cost

- One search credit covers a query plus 25 more page requests for it within 24 hours, so paging through one query is cheap but each new query costs a credit.
- `counts_only=true` is free, but counts towards the daily request cap.
- **402** means out of credits and **429** means a throughput or daily cap (daily caps reset at midnight UTC). Stop and tell the user. Do not retry in a loop. A 429 with `Retry-After` may be retried once after that delay.
- 400 is an invalid query (e.g. no positive term, `regex` with `ignore_case`). It is not charged.

## Examples

`curl -G` with `--data-urlencode` takes care of URL-encoding the query.

Check if a banner ID is from a shared CMP (free count first):

```bash
curl -sG "https://www.searchwebcode.com/api/v1/search" \
  -H "Authorization: Bearer $SEARCHWEBCODE_KEY" \
  --data-urlencode 'q="sd-cmp"' --data-urlencode 'counts_only=true' \
  | jq '{error, total, count_kind}'
```

List the top sites with snippets, in the same `url;rank;snippet` shape as PublicWWW:

```bash
curl -sG "https://www.searchwebcode.com/api/v1/search" \
  -H "Authorization: Bearer $SEARCHWEBCODE_KEY" \
  --data-urlencode 'q="sd-cmp"' --data-urlencode 'limit=20' \
  | jq -r '.error // empty, (.results[]? | [.url, .rank, .snippet.text] | join(";"))'
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
