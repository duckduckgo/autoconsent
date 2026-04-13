# Autoconsent

This is a library of rules for navigating through common consent popups on the web. These rules
can be run in a Chrome extension, or in a Playwright-orchestrated headless browser. Using
these rules, opt-in and opt-out options can be selected automatically, without requiring
user-input.

## Using the library
Autoconsent is meant to be used in browser apps and extensions. [DuckDuckGo browser apps](https://duckduckgo.com/app) use this library to automatically handle cookie consent popups.

To integrate Autoconsent, you'll need to instantiate the main `AutoConsent` class in a content script (running in isolated page context), and implement some configuration hooks in a background script. See [this document](docs/api.md) for more details on internal APIs and data flows.

```javascript
import AutoConsent from '@duckduckgo/autoconsent'; // or '@duckduckgo/autoconsent/extra' for the version with filterlists
import { autoconsent } from '@duckduckgo/autoconsent/rules/rules.json';
import { consentomatic } from '@duckduckgo/autoconsent/rules/consentomatic.json'

const autoconsent = new AutoConsent(
    chrome.runtime.sendMessage, // provide a callback to send messages to the background script
    null, // optionally provide a config object here if you don't want to implement a background script
    { autoconsent, consentomatic },
);

// connect the message receiver callback to handle messages from the background script
chrome.runtime.onMessage.addListener((message) => {
  return Promise.resolve(consent.receiveMessageCallback(message));
});
```

In some environments (e.g. browser extensions), it's useful to access [eval snippet functions](./lib/eval-snippets.ts) directly in the background script. This can be done by importing the `evalSnippets` object from the library:

```javascript
import { evalSnippets } from '@duckduckgo/autoconsent';
```

## Browser extension

Autoconsent comes with a reference extension implementation. It is not published in stores since the feature is available in all [DuckDuckGo apps](https://duckduckgo.com/app), but you can build it yourself and use for testing.

To build the extension:

```bash
# Download dependencies
npm install
# Build the extension
npm run prepublish
```

The extension-specific code can be found in the `addon` directory. There are two versions of the
addon (found under `dist/addon` after building), one for `mv3` version for Chromium-based browsers, and a `firefox` version for Firefox.
You can load these in [Chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked)
in developer mode, and in [Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
as a temporary addon.

### Watch mode
For development, you can run in watch mode

```bash
npm run watch
```

This will rebuild the extension on every source file change. You still need to refresh the extension in the browser to see the changes.

## Using with Puppeteer

See [puppeteer.md](./docs/puppeteer.md) for a full integration guide.

## Rules

The library's functionality is implemented as a set of rules that define how to manage consent on
a subset of sites. These generally correspond to specific Consent Management Providers (CMPs)
that are installed on multiple sites. Each CMP ruleset defines:

 * If the site is using that CMP
 * If a popup is displayed
 * Steps to specify an 'opt-in' or 'opt-out' consent for the CMP.
 * Optionally, a test if the consent was correctly applied.

There are currently three ways of implementing a CMP:

 1. As a [JSON ruleset](./rules/autoconsent/), intepreted by the `AutoConsent` class.
 1. As a class implementing the `AutoCMP` interface. This enables more complex logic than the linear AutoConsent
 rulesets allow.
 3. As a [Consent-O-Matic](https://github.com/cavi-au/Consent-O-Matic) rule. The `ConsentOMaticCMP` class implements
 compability with rules written for the Consent-O-Matic extension.

For more details on rule types, see [Rule Syntax Reference](docs/rule-syntax.md).

## License

MPLv2.

## Manual Testing

To test the extension / addon with Firefox, open the `about:debugging`, navigate to "This Firefox" on the menu and under "Temporary Extensions" click on "Load Temporary Addon". Select the `manifest.json` file from the `dist/firefox` directory. You will need to build the extension before as described above. The extension should then be active and you can test it manually by simply visiting websites.
