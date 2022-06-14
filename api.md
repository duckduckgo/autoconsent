# API

## Content script
Most of autoconsent logic is contained in a content script that should be injected into every page. However, the high-level orchestration is controlled externally by a background service worker (in case of a web extension), or a native browser integration. Autoconsent sends and receives messages to the background worker using provided callables which mimic postMessage API:

```typescript
const consent = new AutoConsent( // make sure not to leak anything to the page globals
    chrome.runtime.sendMessage, // pass a function to send messages to the background worker
    { // optionally, pass a config object
        enabled: true,
        autoAction: 'optOut',
        disabledCmps: [],
        enablePrehide: true,
    },
    { // optionally, pass JSON rules
        autoconsent: [ ... ],
        consentomatic: [ ... ],
    }
);

// connect .receiveMessageCallback() to a platform-specific message receiver
chrome.runtime.onMessage.addListener((message: BackgroundMessage) => {
    return Promise.resolve(
        consent.receiveMessageCallback(message)
    );
});
```

## Messaging API

For concrete message format, refer to [messages.ts](/lib/messages.ts).

The overall workflow is described below:

```mermaid

sequenceDiagram
    participant BG as Browser (e.g. background service worker)
    participant CS as Autoconsent content script in page (isolated) world

    Note over BG: Fetch declarative JSON rules and user settings
    Note over CS: Autoconsent class is instantiated.<br/>Optionally, initConfig is passed to constructor

    CS -->>+ BG: (if initConfig is not passed already)<br/>init
    BG -->>- CS: initResp<br/>(contains user settings and JSON rules)

    activate CS
    Note right of CS: Parse rules and initialize autoconsent code
    Note right of CS: apply prehideSelectors
    Note right of CS: wait for DOMContentLoaded
    Note right of CS: detect a visible cookie popup
    CS ->> BG: popupFound
    deactivate CS

    activate BG
    Note left of BG: (if config.autoAction is not defined)<br/>decide when to trigger opt-in / opt-out
    Note right of CS: (if config.autoAction IS defined)<br/>proceed immediately
    BG -->> CS: optIn / optOut
    deactivate BG

    Note right of CS: execute opt-in / opt-out rules
    CS ->> BG: optOutResult / optInResult

    CS ->> BG: (if not intermediate ruleset)<br/>autoconsentDone

    BG -->>+ CS: (optional) selfTest
    Note right of CS: execute self-test rules
    CS -->>- BG: selfTestResult
```

### Asynchronous eval rules

Some rulesets rely on [eval rules](/readme.md#eval) executed in page main context. Since the content script lives in an isolated world, it passes those calls to the more powerful background worker.

**Warning**: eval rules are potentially dangerous and should be avoided when possible.

```mermaid
sequenceDiagram
    participant P as Page main world
    participant BG as Browser (e.g. background service worker)
    participant CS as Autoconsent content script in page (isolated) world

    Note over CS: Needs to evaluate <PAYLOAD> in the main world (e.g. interact with API)

    CS ->> BG: { type: "eval", id: <UUID>, code: <PAYLOAD> }
    activate BG
    BG ->>+ P: evaluate <PAYLOAD> using platform-specific APIs<br/>e.g. chrome.scripting.executeScript()
    P ->>- BG: evaluation <RESULT>
    BG ->> CS: { type: "evalResp", id: <UUID>, result: <RESULT> }
    deactivate BG

    Note over CS: Continue rule execution (or fail with timeout)
```