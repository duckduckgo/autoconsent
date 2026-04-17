# Using Autoconsent with Puppeteer

Autoconsent can be used with [Puppeteer](https://pptr.dev) via the bundled `dist/autoconsent.playwright.js` script. This self-contained IIFE expects two globals:

- `window.autoconsentSendMessage` — used by the content script to send messages from the page to Node.
- `window.autoconsentReceiveMessage` — used by Node to send messages back into the page.

Puppeteer's `page.exposeFunction` and `page.evaluateOnNewDocument` bridge the gap.

```javascript
import puppeteer from 'puppeteer'
import fs from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const autoconsentScript = fs.readFileSync(
  resolve(
    dirname(fileURLToPath(import.meta.resolve('@duckduckgo/autoconsent'))),
    'autoconsent.playwright.js'
  ),
  'utf8'
)

// Load the rule bundles shipped with the package
const rules = JSON.parse(
  fs.readFileSync(
    fileURLToPath(import.meta.resolve('@duckduckgo/autoconsent/rules/rules.json')),
    'utf8'
  )
)

// See https://github.com/duckduckgo/autoconsent/blob/main/docs/api.md
const autoconsentConfig = {
  enabled: true,
  autoAction: 'optOut',
  disabledCmps: [],
  enablePrehide: true,
  enableCosmeticRules: true,
  enableGeneratedRules: true,
  detectRetries: 20,
  isMainWorld: false,
  prehideTimeout: 2000,
  enableFilterList: false,
  enableHeuristicDetection: true,
  enableHeuristicAction: true,
  logs: {
    lifecycle: false,
    rulesteps: false,
    detectionsteps: false,
    evals: false,
    errors: true,
    messages: false,
    waits: false,
  },
}

const sendMessage = (page, message) =>
  page
    .evaluate(msg => {
      if (window.autoconsentReceiveMessage) {
        return window.autoconsentReceiveMessage(msg)
      }
    }, message)
    .catch(() => {})

async function setupAutoconsent(page) {
  await page.exposeFunction('autoconsentSendMessage', async message => {
    if (!message || typeof message !== 'object') return

    switch (message.type) {
      case 'init':
        return sendMessage(page, {
          type: 'initResp',
          config: autoconsentConfig,
          rules, // must include rules or no CMPs will be detected
        })

      case 'eval': {
        const result = await page.evaluate(message.code)
        return sendMessage(page, {
          type: 'evalResp',
          id: message.id,
          result,
        })
      }

      // informational messages — log or act on as needed
      case 'cmpDetected':
        console.log(`CMP detected: ${message.cmp}`)
        break
      case 'popupFound':
        console.log(`Popup found: ${message.cmp}`)
        break
      case 'optOutResult':
        console.log(`Opt-out result: ${message.result}`)
        break
      case 'autoconsentDone':
        console.log(`Autoconsent done: ${message.cmp}`)
        break
      case 'autoconsentError':
        console.error(`Autoconsent error:`, message.details)
        break
    }
  })

  await page.evaluateOnNewDocument(autoconsentScript)
}

;(async () => {
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()

  await setupAutoconsent(page)
  await page.goto('https://example.com', { waitUntil: 'load' })

  // Re-run on the current document in case the page was already loaded
  // before evaluateOnNewDocument had a chance to fire
  await page.evaluate(autoconsentScript).catch(() => {})

  // … continue with your automation
  await browser.close()
})()
```

## How it works

1. **`page.exposeFunction`** binds `window.autoconsentSendMessage` in the page, giving the content script a way to call back into Node.
2. **`page.evaluateOnNewDocument`** injects the content script so it runs before any page JavaScript, enabling early CMP detection and prehiding.
3. When the content script starts, it sends an `init` message. The Node-side handler replies with `initResp` containing both the config **and the rule bundles**, which triggers CMP detection and automatic opt-out.
4. `eval` messages are handled by running `page.evaluate(message.code)` in the main world, matching how the [Playwright test runner](../playwright/runner.ts) handles them.
5. A post-navigation `page.evaluate(autoconsentScript)` re-triggers the script on the current document, covering cases where the page loaded before the `evaluateOnNewDocument` hook was set up.

## Config reference

See the full `Config` type in [`lib/types.ts`](../lib/types.ts) and the [API documentation](./api.md) for details on all available options.

Key options:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enabled` | boolean | — | Master switch for autoconsent |
| `autoAction` | `'optOut' \| 'optIn' \| null` | — | Action to perform automatically when a popup is found |
| `enablePrehide` | boolean | — | Inject CSS early to prevent popup flicker |
| `enableCosmeticRules` | boolean | — | Enable rules that hide popups via CSS |
| `enableGeneratedRules` | boolean | — | Include auto-generated rules |
| `detectRetries` | number | — | How many times to retry CMP detection |
| `enableFilterList` | boolean | — | Enable ABP/uBO cosmetic filter support (requires the `/extra` build) |

## Rules

The `initResp` message **must** include a `rules` object. Without rules, no CMPs will be detected. The package ships pre-built rule bundles:

- `@duckduckgo/autoconsent/rules/rules.json` — full rules (includes `autoconsent` and `consentomatic` arrays)
- `@duckduckgo/autoconsent/rules/compact-rules.json` — compact encoding for opt-out only (smaller payload)

Load either file and pass it as the `rules` field in the `initResp` message.
