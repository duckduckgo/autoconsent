---
name: brightdata-testing
description: Test autoconsent rules across geographic regions using BrightData remote browsers. Use this skill whenever you need to verify that a rule change works correctly in multiple regions (US, EU, UK, etc.), or when investigating region-dependent CMP behavior.
---

# BrightData Regional Testing

Test autoconsent cookie consent rules across geographic regions using BrightData's remote browser infrastructure.

## When to Use

- After creating or modifying any autoconsent rule (JSON or code-based) — all rules are potentially region-sensitive.
- When investigating region-dependent CMP behavior (GDPR vs CCPA vs other variants).
- When a Playwright E2E test passes locally but you need to verify behavior from specific geographic locations.
- When triaging broken sites that may behave differently by region.

## Prerequisites

The following environment variables must be set (available as Cursor Cloud Agent secrets):

- `BRIGHTDATA_WEBACCESS_USER`
- `BRIGHTDATA_WEBACCESS_PASSWORD`
- `BRIGHTDATA_WEBACCESS_HOST`

The project must be built before running tests:

```bash
npm run prepublish
```

## Running the Test Script

```bash
npx ts-node --transpile-only scripts/brightdata-test.ts [options] <url> [url2] ...
```

### Options

| Option | Description | Default |
|--------|-------------|---------|
| `--regions <list>` | Comma-separated region keys | All regions |
| `--action <action>` | `optOut` or `optIn` | `optOut` |
| `--screenshots <dir>` | Screenshot output directory | `test-results/brightdata` |

### Available Regions

| Key | Location |
|-----|----------|
| `us-ny` | United States (New York) |
| `us-la` | United States (Los Angeles) |
| `de` | Germany |
| `fr` | France |
| `gb` | United Kingdom |
| `nl` | Netherlands |
| `ca` | Canada |
| `au` | Australia |

### Examples

Test a single URL across all regions:
```bash
npx ts-node --transpile-only scripts/brightdata-test.ts https://www.wohnen.de/
```

Test specific regions:
```bash
npx ts-node --transpile-only scripts/brightdata-test.ts --regions de,gb,us-ny https://www.wohnen.de/
```

Test opt-in flow:
```bash
npx ts-node --transpile-only scripts/brightdata-test.ts --action optIn --regions de https://www.wohnen.de/
```

## Interpreting Results

The script outputs structured results per URL per region:

- **PASS**: CMP detected, popup found, opt-out/opt-in succeeded, self-test passed.
- **PARTIAL**: CMP detected but opt-out didn't complete (indicates a broken rule).
- **OPT-OUT FAILED**: Rule ran but opt-out returned false.
- **NO CMP**: No cookie consent popup detected in this region (expected for some regions like US on EU-only CMPs).

### Key Messages

| Message | Meaning |
|---------|---------|
| `cmpDetected` | A CMP rule matched the page |
| `popupFound` | The cookie popup is visible |
| `optOutResult: true` | Opt-out buttons were clicked successfully |
| `selfTestResult: true` | Post-opt-out verification passed |
| `autoconsentDone` | Full autoconsent flow completed |

### Screenshots

Screenshots are saved at each lifecycle stage:
- `*-cmpDetected.jpg` — when CMP is first detected
- `*-popupFound.jpg` — when popup becomes visible
- `*-result.jpg` — after opt-out/opt-in action
- `*-done.jpg` — after autoconsent completes
- `*-final.jpg` — final page state

### JSON Results

Detailed JSON results are written to `test-results/brightdata/results.json`.

## Testing Workflow for Rule Changes

1. **Build the project** to include your rule changes:
   ```bash
   npm run prepublish
   ```

2. **Find test URLs**: Use `data/coverage.json` or the test spec in `tests/` for the CMP you're modifying. Prefer URLs from the CMP's test spec.

3. **Run across all regions**:
   ```bash
   npx ts-node --transpile-only scripts/brightdata-test.ts <url>
   ```

4. **Interpret results**:
   - **All PASS**: Rule works across all regions.
   - **Some NO CMP**: Expected if the CMP only shows in certain regions (e.g., EU-only). Verify this matches the CMP's expected behavior.
   - **Any PARTIAL or FAILED**: Rule is broken in that region. Inspect screenshots and fix.

5. **Iterate**: Fix the rule, rebuild (`npm run prepublish`), and re-test.

## Limitations

- BrightData blocks certain site categories (e.g., gaming sites). If a test URL is blocked, you'll see a navigation error. Use an alternative URL for the same CMP.
- The script injects autoconsent in the page's main world (not an isolated world). This matches how the Playwright test runner works but differs from the Chrome extension which uses content script isolation.
- Some sites may detect automated browsers and show different behavior. The script uses a standard Chrome user agent.
- Each region test creates a new BrightData browser session, so tests run sequentially per region.
