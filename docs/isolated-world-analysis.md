# Analysis: Isolated World Support in the Playwright Test Runner

## Problem Statement

In production (the Chrome/Firefox extension), autoconsent's content script runs in Chrome's **isolated world** — a separate JavaScript execution context that shares the DOM with the page but has its own `window` object. The Playwright test runner, however, injects the content script using `page.evaluate()` / `frame.evaluate()`, which runs code in the page's **main world** (the same JavaScript context as the site's own scripts).

This discrepancy means the Playwright tests don't accurately replicate the production execution environment, which can mask certain classes of bugs or produce false positives.

## Current Architecture

### Production (Extension)

```
┌──────────────────────────────────────────────────┐
│ Page Main World                                  │
│  - Site's own JS (window.Cookiebot, __cmp, etc.) │
│  - eval snippets execute here via                │
│    chrome.scripting.executeScript({world:'MAIN'}) │
└──────────────────────────────────────────────────┘
            ▲ Shared DOM, separate window objects ▼
┌──────────────────────────────────────────────────┐
│ Isolated World (Content Script)                  │
│  - autoconsent engine (AutoConsent class)         │
│  - DomActions (clicks, querySelector, hide, etc.) │
│  - Rule evaluation, CMP detection                │
│  - Cannot see window.Cookiebot, __cmp, etc.      │
│  - Sends 'eval' messages to background for       │
│    main-world execution                          │
└──────────────────────────────────────────────────┘
            ▲ chrome.runtime messaging ▼
┌──────────────────────────────────────────────────┐
│ Background Service Worker                        │
│  - Receives 'eval' messages                      │
│  - Calls chrome.scripting.executeScript({        │
│      world: 'MAIN', func: snippets[id]           │
│    })                                            │
│  - Returns evalResp to content script            │
└──────────────────────────────────────────────────┘
```

### Playwright Test Runner (Current)

```
┌──────────────────────────────────────────────────┐
│ Page Main World                                  │
│  - Site's own JS (window.Cookiebot, __cmp, etc.) │
│  - autoconsent engine (ALSO runs here!)          │
│  - DomActions (clicks, querySelector, hide, etc.) │
│  - eval snippets execute via frame.evaluate()    │
│  - window.autoconsentSendMessage (exposed        │
│    binding)                                      │
│  - window.autoconsentReceiveMessage              │
└──────────────────────────────────────────────────┘
            ▲ exposeBinding bridge ▼
┌──────────────────────────────────────────────────┐
│ Node.js (Playwright Test)                        │
│  - TestRun.messageCallback()                     │
│  - Handles init, eval, cmpDetected, etc.         │
│  - Simulates background service worker           │
└──────────────────────────────────────────────────┘
```

## Consequences of Main-World Execution

### 1. Namespace Collisions
The autoconsent engine shares `window` with the site's own scripts. Variables like `window.autoconsentSendMessage` and `window.autoconsentReceiveMessage` are visible to the page. If a site's scripts happened to define these names, they would conflict. In the isolated world, the content script's `window` is completely separate.

### 2. Eval Snippets Always Work (False Positives)
In production, eval snippets (`EVAL_COOKIEBOT_1`, `EVAL_ONETRUST_1`, etc.) must be serialized and sent to the background, which executes them in the main world via `chrome.scripting.executeScript`. This round-trip can fail (timeout, serialization issues). In Playwright, the content script is *already* in the main world, so `window.Cookiebot` is directly accessible — no round-trip needed. The `isMainWorld: false` config still triggers the `requestEval` → `frame.evaluate` path, but since `frame.evaluate` also runs in the main world, the distinction is moot.

### 3. Page Script Interference
Since autoconsent runs in the main world during tests, the page's scripts could accidentally overwrite or interfere with autoconsent's internal state. In the isolated world, this is impossible because each world has its own global scope.

### 4. ConsentOMatic `window.eval()` Calls
ConsentOMatic rules use `window.eval(config.code)` directly. In the extension's isolated world, this eval runs in the *isolated* context, not the page's main world. In Playwright, it runs in the main world. This can cause different behavior if the eval'd code references page globals.

## Approaches to Isolated World Execution

### Approach 1: CDP `Page.createIsolatedWorld` (Chromium Only)

Playwright exposes a CDP session API (`page.context().newCDPSession(page)`) that allows sending raw Chrome DevTools Protocol commands. The CDP method `Page.createIsolatedWorld` creates an isolated execution context within a frame, returning an `executionContextId`.

```typescript
const cdp = await page.context().newCDPSession(page);
const { executionContextId } = await cdp.send('Page.createIsolatedWorld', {
    frameId: frameTree.frame.id,
    worldName: 'autoconsent-isolated',
    grantUniveralAccess: true,
});
// Execute the content script in the isolated world
await cdp.send('Runtime.evaluate', {
    expression: contentScript,
    contextId: executionContextId,
});
```

**Pros:**
- Most faithful reproduction of the extension's execution model
- Truly isolated `window` object, like the real extension
- Content script can't see page globals (accurate testing of eval round-trip)

**Cons:**
- **Chromium only** — CDP is not available for WebKit or Firefox projects. The primary test project is `webkit` (mimicking DuckDuckGo's WebKit-based browser), so this approach wouldn't work for the main test suite.
- Messaging becomes more complex — `exposeBinding` works on the main world, so you'd need a different bridge mechanism (e.g., DOM-based message passing via `CustomEvent` or `postMessage`)
- `frame.evaluate()` for eval responses would need to target the isolated world's execution context, not the main world
- Frame navigation re-injection would need to track isolated world context IDs

### Approach 2: `addInitScript` for Early Injection

Playwright's `page.addInitScript()` runs scripts after the document is created but before any page scripts. However, it still runs in the **main world** — it doesn't create an isolated world. So this doesn't solve the isolation problem, but it does improve injection timing (closer to `document_start`).

**Pros:**
- Better timing fidelity (document_start equivalent)
- Works across all browser engines

**Cons:**
- Still main world — no isolation
- Doesn't solve the core architectural mismatch

### Approach 3: Wrapper-Based Pseudo-Isolation

Wrap the content script in an IIFE that creates a private scope and shadows `window` with a Proxy that restricts access to page globals. The Proxy would forward DOM access (document, querySelector, etc.) but block access to page-specific globals unless explicitly requested.

```typescript
(function() {
    const isolatedWindow = new Proxy(window, {
        get(target, prop) {
            if (prop === 'document' || prop === 'location' || ...) {
                return target[prop]; // allow DOM access
            }
            if (prop in privateScope) {
                return privateScope[prop]; // isolated scope
            }
            return undefined; // block page globals
        }
    });
    // ... run autoconsent with isolatedWindow
})();
```

**Pros:**
- Works across all browser engines
- Somewhat simulates isolation

**Cons:**
- Incomplete isolation — page scripts can still see autoconsent's side effects on the DOM
- Fragile — many edge cases with Proxy behavior
- High implementation complexity for uncertain fidelity
- Doesn't match Chrome's actual isolated world semantics

### Approach 4: Chrome Extension Loading in Playwright (Chromium Only)

Playwright supports loading Chrome extensions in Chromium via `launchPersistentContext` with `--load-extension` args. The built extension (`dist/addon-mv3/`) would run with its natural isolated world.

```typescript
const context = await chromium.launchPersistentContext('', {
    args: [
        `--disable-extensions-except=${extensionPath}`,
        `--load-extension=${extensionPath}`,
    ],
});
```

**Pros:**
- Perfect fidelity — the real extension runs in its real isolated world
- Tests the actual artifact that ships to users
- No custom injection or bridge code needed

**Cons:**
- **Chromium only** — doesn't work with WebKit (the primary test target)
- More complex test setup — need to handle service worker initialization, extension messaging
- Slower test startup
- Can't easily intercept/assert on internal messages (would need devtools panel or storage inspection)
- Firefox support would require a separate setup with `web-ext`

### Approach 5: Hybrid Approach (Recommended for Future)

Add a **separate Chromium-only test project** that loads the real extension in a persistent context, while keeping the existing main-world injection for cross-browser testing. This would provide:

1. **Cross-browser coverage** (existing approach): webkit, firefox, chrome — main-world injection, tests CMP detection and opt-out flows
2. **Isolation-fidelity coverage** (new): chrome-extension project — real extension loading, tests that the eval round-trip and isolation model work correctly

```typescript
// In playwright.config.ts
{
    name: 'chrome-extension',
    use: {
        // persistent context with extension loaded
    },
}
```

## Assessment and Recommendations

### Why the Current Approach Works Well

The main-world injection approach is pragmatic and effective because:

1. **DOM operations are world-agnostic**: `document.querySelector`, `element.click()`, `getComputedStyle()` — these all work identically in both main and isolated worlds. The DOM is shared. Since 95%+ of autoconsent's logic is DOM manipulation, world isolation has minimal impact on test accuracy.

2. **The eval bridge is already tested**: The `requestEval` → `frame.evaluate` path exercises the same async flow as the production `requestEval` → background → `chrome.scripting.executeScript` path. The serialization, deferred promise resolution, and timeout handling are all exercised.

3. **Cross-browser testing is critical**: DuckDuckGo uses autoconsent in WebKit-based browsers (iOS/macOS), Chromium (Android), and the extension. WebKit testing is the highest priority, and CDP-based isolation isn't available there.

4. **E2E tests hit live sites**: The tests verify that CMP detection, popup finding, and opt-out flows work against real websites. Whether the engine runs in main or isolated world doesn't change the CMP behavior.

### Where Isolation Would Catch Real Bugs

Isolated world testing would specifically help catch:

1. **Accidental reliance on page globals**: If a rule or CMP class accidentally references a page global (e.g., `window.somePageVariable`) that happens to exist during testing but wouldn't be visible in the isolated world, main-world tests would pass but production would fail.

2. **ConsentOMatic eval leakage**: The `window.eval(config.code)` in ConsentOMatic rules behaves differently in isolated vs main world. If eval'd code assumes access to page globals, it would work in tests but fail in production.

3. **`exposeBinding` visibility**: In production, the content script's `window` doesn't have `autoconsentSendMessage` or `autoconsentReceiveMessage` as global functions — these are internal. In tests, they're visible page globals.

### Recommendation

**Short term**: No changes needed. The current approach provides excellent test coverage for the primary concern (CMP rule correctness) across all target browsers.

**Medium term**: Consider adding a `chrome-extension` project to `playwright.config.ts` that loads the built extension in a persistent Chromium context. This would run a subset of tests (perhaps just the code-based CMPs that use eval snippets) to verify the eval round-trip works correctly with real isolation. This is the Approach 4/5 hybrid.

**Long term**: If Playwright adds native isolated world support (unlikely in the near term, as it's a Chrome-specific concept), adopt it for the Chromium project.

## Proof of Concept

A proof-of-concept implementation for Approach 1 (CDP `Page.createIsolatedWorld`) is provided in `playwright/isolated-world-runner.ts`. This demonstrates the technique for the `chrome` project only, showing how the content script can be injected into an isolated world with a custom messaging bridge.

Note that this POC is **not recommended for production use** in this test suite because:
- It only works with the `chrome` project (not webkit, the primary target)
- The messaging bridge adds complexity
- The benefit is marginal for the types of bugs the E2E tests are designed to catch
