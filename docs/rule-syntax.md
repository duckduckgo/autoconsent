# Rule Syntax Reference

An autoconsent CMP rule can be written as either:
 * a JSON file adhering to the `AutoConsentCMPRule` type.
 * a class implementing the `AutoCMP` interface, or
   * common JSON rules are available as reusable functions in [dom-actions.ts](/lib/dom-actions.ts). You can also use existing class-based rules as reference.

In most cases the JSON syntax should be sufficient, unless some complex non-linear logic is required, in which case a class is required.

Both JSON and class implementations have the following components:
 * `name` - to identify this CMP.
 * `detectCMP` - which determines if this CMP is included on the page.
 * `detectPopup` - which determines if a popup is being shown by the CMP.
 * `optOut` - a list of actions to do an 'opt-out' from the popup screen. i.e. denying all consents possible.
 * `optIn` - a list of actions for an 'opt-in' from the popup screen.
 * (optional) `prehideSelectors` - a list of CSS selectors to "pre-hide" early before detecting a CMP. This helps against flickering. Pre-hiding is done using CSS `opacity` and `z-index`, so it should be used with care to prevent conflicts with the opt-out process.
 * (optional) `intermediate` - a boolean flag indicating that the ruleset is part of a multi-stage process, see [Intermediate rules](#intermediate-rules). This is `false` by default.
 * (optional) `_metadata` - an object containing additional metadata about the rule. Metadata is lost during the build process, and is not used by the library in runtime.
 * (optional) `cosmetic` - a boolean flag indicating that the rule is purely cosmetic and does not affect the consent state. This is `false` by default.
 * (optional) `runContext` - an object describing when this rule should be tried:
   * `main` - boolean, set to `true` if the rule should be executed in top-level documents (default: `true`)
   * `frame` - boolean, set to `true` if the rule should be executed in nested frames (default: `false`)
   * `urlPattern` - string, specifies a regular expression that should match the page URL (default: empty)
 * (optional) `test` - a list of actions to verify a successful opt-out. This is currently only used in Playwright tests.
 * (optional) `minimumRuleStepVersion` - the minimum rule step version needed to execute this rule. Defaults to `1`. See [Rule Step Versioning](#rule-step-versioning).


`detectCMP`, `detectPopup`, `optOut`, `optIn`, and `test` are defined as a set of checks or actions on the page. In the JSON syntax this is a list of `AutoConsentRuleStep` objects. For `detect` checks, we return true for the check if all steps return true. For opt in and out, we execute actions in order, exiting if one fails.

**Important:** Do not use `wait` steps in `detectCmp` or `detectPopup` arrays. Detection must be fast and non-blocking -- the engine already retries detection automatically with its own timing. Adding `wait` steps to detection slows down detection of other rules.

The following checks/actions are supported:

## Element selectors

Many rules use `ElementSelector` to locate elements in a page. `ElementSelector` can be a string, or array of strings, which are used to locate elements as follows:
 - By default, strings are treated as [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) via the `querySelector` API. e.g. `#reject-cookies` to find an element whose `id` is 'reject-cookies'.
 - Strings prefixed with `xpath/` are [Xpath](https://developer.mozilla.org/en-US/docs/Web/XPath) selectors which can locate elements in the page via [`document.evaluate`](https://developer.mozilla.org/en-US/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript#document.evaluate). e.g. `xpath///*[@id="reject-cookies"]` can find an element whose `id` is 'reject-cookies'.
 - If an array of strings is given, the selectors are applied in array order, with the search scope constrained each time but the first match of the previous selector. e.g. `['#reject-cookies', 'button']` first looks for an element with `id="reject-cookies"`, then looks for a match for `button` _that is a descendant_ of that element. Compared to normal CSS selectors, this allows piercing shadow DOM and iframes:
   - If one of the selectors returns an element that has a non-null `shadowRoot` property (open shadow DOM), the next selector will run within that element's shadow DOM.
   - If one of the selectors returns an iframe element with a non-null `contentDocument` property (same-origin iframe), the next selector will run within that iframe's document.

 For example, consider the following DOM fragment:
 ```html
 <open-shadow-root-element>
  <button>X</button>
 </open-shadow-root-element>
 ```

Then `['open-shadow-root-element', 'button']` will find the button, but a usual CSS selector `'open-shadow-root-element button'` will not.

## Element exists

```javascript
{
  "exists": ElementSelector
}
```
Returns true if the given selector matches one or more elements.

## Element visible

```javascript
{
  "visible": ElementSelector,
  "check": "any" | "all" | "none"
}
```
Returns true if elements matched by ElementSelector are currently visible on the page. If `check` is `all` (default), every element must be visible. If `check` is `none`, no element should be visible. Visibility check is a CSS-based heuristic.

## Wait for element

```javascript
{
  "waitFor": ElementSelector,
  "timeout": 1000
}
```
Waits until `selector` exists in the page. After `timeout` ms the step fails.

## Wait for visibility

```javascript
{
  "waitForVisible": ElementSelector,
  "timeout": 1000,
  "check": "any" | "all" | "none"
}
```
Waits until element is visible in the page. After `timeout` ms the step fails.

## Click an element
```javascript
{
  "click": ElementSelector,
  "all": true | false,
}
```
Click on an element returned by `selector`. If `all` is `true`, all matching elements are clicked. If `all` is `false`, only the first returned value is clicked.

## Wait for then click
```javascript
{
  "waitForThenClick": ElementSelector,
  "timeout": 1000,
  "all": true | false
}
```
Combines `waitFor` and `click`.

## Unconditional wait
```javascript
{
  "wait": 1000,
}
```
Wait for the specified number of milliseconds.

## Hide
```javascript
{
  "hide": "CSS selector",
  "method": "display" | "opacity"
}
```
Hide the elements matched by the selectors. `method` defines how elements are hidden: "display" sets `display: none`, "opacity" sets `opacity: 0`. Method is "display" by default. Note that only a single string CSS selector is supported here, not an array.

## Remove class
```javascript
{
  "removeClass": "class-name",
  "selector": ElementSelector
}
```
Remove the class named `class-name` from the elements matched by the `selector`.

## Set style

```javascript
{
  "setStyle": "style-string",
  "selector": ElementSelector
}
```
Set the inline style of the elements matched by the `selector`. `style-string` is a string of CSS properties and values.

## Add style

```javascript
{
  "addStyle": "style-string",
  "selector": ElementSelector
}
```
Append the inline style of the elements matched by the `selector`. `style-string` is a string of CSS properties and values. The style is appended to the existing inline style, separated by a semicolon.

## Cookie match
```javascript
{
  "cookieContains": "substring"
}
```
Checks if the substring is present in the document.cookie string.

## Eval

```javascript
{
  "eval": "SNIPPET_ID"
}
```
Evaluates a code snippet in the context of the page. The rule is considered successful if it *evaluates to a truthy value*. Snippets have to be explicitly defined in [snippets.ts](/lib/eval-snippets.ts).
Eval rules are not 100% reliable because they can be affected by the page scripts, or blocked by a CSP policy on the page. Therefore, they should only be used as a last resort when none of the other rules are sufficient.

## Conditionals

```javascript
{
  "if": { "exists": ElementSelector },
  "then": [
    { "click": ".button1" },
    { "click": ".button3" }
  ],
  "else": [
    { "click": ".button2" }
  ]
}
```

Allows to do conditional branching in JSON rules. The `if` section can contain either a "visible" or "exists" rule. Depending on the result of that rule, `then` or `else` sequences will be executed. `else` section is optional.
The "if" rule is considered successful as long as all rules inside the chosen branch are successful. The other branch, as well as the result of the condition itself, do not affect the result of the whole rule.

## Any

```javascript
{
  "any": [
    { "exists": ".button1" },
    { "exists": ".button2" }
  ]
}
```

Evaluates a list of steps in order. If any return true (success), then the step returns true. If all steps return false, the `any` step returns false.

## Negation

```javascript
{
  "negated": true | false
}
```

If `negated` is true, the result will be inverted. For example, `{ "exists": ".my-class", "negated": true }` will return true if `.my-class` does not exist.

## Optional actions

All rules can include the `"optional": true` to ignore failure.

## Intermediate rules

Sometimes the opt-out process requires actions that span across multiple pages or iframes. In this case it is necessary to define stages (each corresponding to a separate page context) as separate rulesets. Each one, except the very last stage, must be marked as intermediate using the `intermediate: true` flag. If the `intermediate` flag is not set correctly, autoconsent may report a successful opt-out even if it is not yet finished.

## Cosmetic rules

Some rules do not interact with the page, and only hide the cookie pop-ups with CSS. These rules are marked with the `cosmetic: true` flag. They are useful for pop-ups that do not provide a Reject button. Cosmetic rules can be disabled with the `enableCosmeticRules` config option.

### Filterlist
Autoconsent supports cosmetic filters in common ABP/uBO format. For performance reasons, it needs to be bundled at build time. At the moment we include cosmetic filters from [Easylist Cookie](https://github.com/easylist/easylist/tree/master/easylist_cookie).
Note that by default filterlist rules are not included, as this significantly increases the resulting bundle size. To use filterlist rules, you need to explicitly import the "extra" version of the library (`@duckduckgo/autoconsent/extra`), and set the `enableFilterlist` config option to `true`.

```javascript
// import the library version with bundled filterlist rules
import AutoConsent from '@duckduckgo/autoconsent/extra'

// ...

new AutoConsent({
  enableFilterlist: true,
  // other options
})

```

## Context filters

By default, rules will be executed in all top-level documents. Some rules are designed for specific contexts (e.g. only nested iframes, or only specific URLs). This can be configured in `runContext` field (see [runContext](#rule-syntax-reference) above).

## Rule Step Versioning

New step types are occasionally added to the autoconsent engine (e.g. `removeClass`, `setStyle`, `addStyle` were added in version 2). Because rules can be shipped to clients independently of app releases, a rule that uses a newer step type could end up on a client that doesn't support it yet.

The `minimumRuleStepVersion` field solves this: clients compare the rule's declared version against their own supported version (`SUPPORTED_RULE_STEP_VERSION` in `lib/rules.ts`) and silently skip rules they cannot execute.

### Version history

| Version | Step types added |
|---------|-----------------|
| 1 | All original step types (`exists`, `visible`, `waitFor`, `waitForVisible`, `click`, `waitForThenClick`, `wait`, `hide`, `if`/`then`/`else`, `any`, `eval`, `cookieContains`, `negated`) |
| 2 | `removeClass`, `setStyle`, `addStyle` |

### When to set it

- If a rule only uses version-1 step types, omit the field (defaults to `1`).
- If a rule uses `removeClass`, `setStyle`, or `addStyle`, set `"minimumRuleStepVersion": 2`.
- When a future version introduces new step types, any rule using them must set `minimumRuleStepVersion` to the corresponding version number.

### Adding new step types

When introducing a new step type:
1. Bump `SUPPORTED_RULE_STEP_VERSION` in `lib/rules.ts` and add a comment describing what was added.
2. Add the new step type definition to the `AutoConsentRuleStep` union in the same file.
3. Any rule using the new step type must set `minimumRuleStepVersion` to the new version number.
