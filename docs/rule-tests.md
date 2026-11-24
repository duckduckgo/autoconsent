# Rule E2E test files

Each rule's end-to-end test sites are plain JSON data in `tests/sites/`:

- `tests/sites/<name>.json` for hand-maintained rules, and for code-based rules in `lib/cmps/`
- `tests/sites/generated/<name>.json` for crawler-generated rules (`rules/generated/<name>.json`)

`tests/rule-sites.spec.ts` is the only Playwright spec. It reads the files and calls `generateCMPTests` from `playwright/runner.ts` once per group. Any tool can read the files to learn which sites and options test a rule, without Playwright or a build.

## Format

The types are in [`playwright/spec-types.ts`](../playwright/spec-types.ts) (`RuleSiteSpec`):

```json
{
    "cmp": "bigid",
    "tests": [
        {
            "sites": ["https://www.muchloved.com/", "https://www.remitly.com/", "https://www.zs.com/"]
        },
        {
            "note": "no reject button on the first layer",
            "sites": ["https://www.dexus.com/"]
        },
        {
            "note": "notice-only layout with just \"Accept all\" and a close icon; the site is only reachable from the US",
            "sites": ["https://www.meijer.com/"],
            "options": { "onlyRegions": ["US"], "testSelfTest": false }
        }
    ]
}
```

- `cmp`: name of the rule that should detect and handle every site in the file, as in the rule's `name`. It often differs from the file name (`onetrust.json` tests `Onetrust`).
- `note` (optional): applies to the whole file.
- `tests`: groups of sites that share options.
  - `sites`: page URLs. Each site gets its own tests.
  - `options` (optional): only the values that differ from the defaults below.
  - `note` (optional): why the sites are here, which popup variant they cover, or why they need these options. JSON has no comments, so this is where that goes.

## Options

| Option | Default | Meaning |
|---|---|---|
| `testOptOut` | `true` | Define an `optOut` test |
| `testOptIn` | `true` | Define an `optIn` test (CI sets `SKIP_OPT_IN=1` and skips these) |
| `testSelfTest` | `true` | Run the rule's self-test after the action. Set it to `false` when the site reloads after the click |
| `onlyRegions` | `[]` | Define the tests only in these regions (`REGION` env var) |
| `skipRegions` | `[]` | Do not define the tests in these regions |
| `mobile` | `false` | Run in the mobile projects (`iphoneSE`) instead of the desktop ones. Use two groups to test both |
| `expectPopupOpen` | `true` | Expect the rule to find an open popup |
| `expectedRuns` | `1` | How many `autoconsentDone` messages are allowed before the test reports a reload loop |
| `gpc` | `false` | Send the Global Privacy Control signal |
| `timeout` | | Minimum test timeout in milliseconds, for sites that show the popup late |

If both `testOptIn` and `testOptOut` are `false`, the site gets a single `noaction` test, which only checks detection.

Each test is named `<hostname> <url hash> .<REGION> <optIn|optOut|noaction> <desktop|mobile>`, inside a `describe` block named after `cmp`.

## Running

```bash
npm run prepublish
SPECS=onetrust npx playwright test tests/rule-sites.spec.ts --project chrome
SPECS=onetrust,generated/auto_AU_acetool.com_n0w REGION=DE npx playwright test tests/rule-sites.spec.ts --project webkit
```

`SPECS` takes comma-separated ids: a file's path under `tests/sites/` without `.json`. Paths such as `tests/sites/onetrust.json` work too. An unknown id is an error. Without `SPECS`, every file runs.

## Validation

`npm run rule-sites-check` (part of `npm run lint`) checks every file against the JSON schema generated from `playwright/spec-types.ts`, so an unknown or misspelled option fails. It also checks that:

- `cmp` names an existing rule in `rules/autoconsent`, `rules/generated` or `lib/cmps`
- URLs are valid
- no group both runs and skips a region
- no two groups define the same test (same rule, URL, action and form factor in an overlapping region): Playwright refuses to load duplicate test names

`npm run create-rule` writes a file with an empty `sites` list, which fails this check until you add sites.

## CI

Jenkins runs `scripts/get-tests-to-run.js` with the files a PR changes. It selects:

- a changed `tests/sites/**/*.json` file
- for a changed rule in `rules/autoconsent/` or `rules/generated/`, or a code-based rule in `lib/cmps/`: every file whose `cmp` is that rule's name, plus a file with the same name as a changed JSON rule

It passes the selection to `tests/rule-sites.spec.ts` in `SPECS`.

## Converting old `.spec.ts` files

A branch that still adds `tests/<name>.spec.ts` files with `generateCMPTests` calls can convert them with:

```bash
node scripts/convert-spec-to-json.js tests/<name>.spec.ts
```

The script writes `tests/sites/<name>.json`, deletes the spec, and turns comments into `note`s. It drops commented-out URLs and lists them, so you can decide whether to keep them.
