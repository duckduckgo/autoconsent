/* global chrome */
chrome.devtools.panels.create(
  "Autoconsent",
  "/icons/cookie.png",
  "/devtools/panel.html"
);

if (chrome.devtools?.recorder) {
  class MyPlugin {
    stringify(recording) {
      const autoconsentSteps = recording.steps
        .filter((step) => ["click"].includes(step.type))
        .map(({ selectors }) => this.convertStep(selectors));
      return Promise.resolve(JSON.stringify(autoconsentSteps, undefined, 4));
    }
    stringifyStep(step) {
      return Promise.resolve(
        JSON.stringify(
          this.convertStep(step.selectors),
          undefined,
          4
        )
      );
    }
    convertStep(selectors) {
      return {
        any: selectors.filter((s) => {
          return s.every(sel => this.isSupportedSelector(sel))
        }).map(s => {
          if (s.length === 1) {
            return {
              waitForThenClick: s[0]
            }
          }
          return {
            waitForThenClick: s
          }
        })
      }
    }

    isSupportedSelector(selector) {
      const unsupportedPrefixes = ['aria/', 'pierce/', 'text/']
      return !unsupportedPrefixes.some(p => selector.startsWith(p))
    }
  }

  chrome.devtools.recorder.registerRecorderExtensionPlugin(
    new MyPlugin(),
    /*name=*/ "Autoconsent",
    /*mediaType=*/ "application/json"
  );
}
