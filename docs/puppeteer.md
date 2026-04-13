# Using Autoconsent with Puppeteer

Autoconsent can be used with [Puppeteer](https://pptr.dev) via the bundled `dist/autoconsent.playwright.js` script. This self-contained IIFE expects two globals:

- `window.autoconsentSendMessage` — used by the content script to send messages from the page to Node.
- `window.autoconsentReceiveMessage` — used by Node to send messages back into the page.

Puppeteer's `page.exposeFunction` and `page.evaluateOnNewDocument` bridge the gap.

```javascript
const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')

const autoconsentScript = fs.readFileSync(
  path.resolve(
    path.dirname(require.resolve('@duckduckgo/autoconsent')),
    'autoconsent.playwright.js'
  ),
  'utf8'
)

// See https://github.com/duckduckgo/autoconsent/blob/main/api.md
const autoconsentConfig = {
  enabled: true,
  autoAction: 'optOut',
  enablePrehide: true,
  enableCosmeticRules: true,
  enableGeneratedRules: true,
  enableHeuristicAction: true,
  detectRetries: 20,
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

    if (message.type === 'init') {
      return sendMessage(page, { type: 'initResp', config: autoconsentConfig })
    }

    if (message.type === 'eval') {
      const result = await page.evaluate(message.code)
      return sendMessage(page, { type: 'evalResp', id: message.id, result })
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
3. When the content script starts, it sends an `init` message. The Node-side handler replies with `initResp` containing the config, which triggers CMP detection and automatic opt-out.
4. `eval` messages are handled by running `page.evaluate(message.code)` in the main world, matching how the [Playwright test runner](./playwright/runner.ts) handles them.
5. A post-navigation `page.evaluate(autoconsentScript)` re-triggers the script on the current document, covering cases where the page loaded before the `evaluateOnNewDocument` hook was set up.
