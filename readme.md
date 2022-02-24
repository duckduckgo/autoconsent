## Autoconsent

This is a library of rules for navigating through common consent popups on the web. These rules
can be run in a Firefox webextension, or in a puppeteer orchestrated headless browser. Using
these rules, opt-in and opt-out options can be selected automatically, without requiring
user-input.

### Install Standalone

The standalone addon can be built with the following steps:

```bash
# Download dependencies
npm ci
# Build JS bundles
npm run bundle
# Build consent ruleset
npm run build-rules
```

The standalone addon can be found in the `addon` directory and can be run with `npm start`.
Alternatively, you can use `web-ext build -s addon/` to generate a packaged addon that can
be installed in an existing Firefox profile.

### Rules

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

### Rule Syntax

An autoconsent CMP rule can be written as either:
 * a class implementing the `AutoCMP` interface, or
 * a JSON file adhering to the `AutoConsentCMPRule` type.

In most cases the JSON syntax should be sufficient, unless non-linear logic is required, in which case a class is required.

Both JSON and class implementations require 5 main components:
 * `name` - to identify this CMP.
 * `detectCMP` - which determines if this CMP is included on the page.
 * `detectPopup` - which determines if a popup is being shown by the CMP.
 * `optOut` - executes actions to do an 'opt-out' from the popup screen. i.e. denying all consents possible.
 * `optIn` - execut actions for an 'opt-in' from the popup screen.

Except for `name` this are defined as a set of checks or actions on the page. In the JSON syntax this is a list of `AutoConsentRuleStep` objects. For `detect` checks, we return true for the check if all steps return true. For opt in and out, we execute actions in order, exiting if one fails. The following checks/actions are supported:

#### Element exists

```json
{
  "exists": "selector"
}
```
Returns true if `document.querySelect(selector)` returns elements.

#### Element visible

```json
{
  "visible": "selector",
  "check": "any" | "all" | "none"
}
```
Returns true if an element returned from `document.querySelect(selector)` is current visible on the page. If `check` is `all`, every element must be visible. If `check` is `none`, no element should be visible.

#### Eval

```json
{
  "eval": "code"
}
```
Evaluates `code` in the context of the page and returns the truthiness of the result.

#### Wait for element

```json
{
  "waitFor": "selector",
  "timeout": 1000
}
```
Waits until `selector` exists in the page. After `timeout` ms the step fails.

#### Click and element
```json
{
  "click": "selector",
  "all": true | false,
}
```
Click on an element returned by `selector`. If `all` is `true`, all matching elements are clicked.

#### Wait for then click
```json
{
  "waitForThenClick": "selector",
  "timeout": 1000
}
```
Combines `waitFor` and `click`.

#### Wait
```json
{
  "wait": 1000,
}
```
Wait for the specified number of milliseconds.

#### Go to URL
```json
{
  "goto": "url"
}
```
Navigate the page to the given URL.

#### Hide rule
```json
{
  "hide": ["selector", ...]
}
```
Set the elements matched by the selectors to `display: none`.

#### Frames

In some cases, rules have to interact with `iframes` in the page. The CMP rule defintion can optionally include a `frame` component that should be the _prefix_ of the expected frame URL. Checks and actions can then add `"frame": true` to indicate that the check or action should be done on the iframe's document (rather than main frame).

#### Optional actions

Any rule can include the `"optional": true` to ignore failure. 

### License

MPLv2.
