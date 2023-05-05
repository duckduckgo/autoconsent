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
        .map(({ selectors }) => {
          return {
            waitForThenClick: selectors,
          };
        });
      return Promise.resolve(JSON.stringify(autoconsentSteps, undefined, 4));
    }
    stringifyStep(step) {
      return Promise.resolve(
        JSON.stringify(
          {
            waitForThenClick: step.selectors,
          },
          undefined,
          4
        )
      );
    }
  }

  chrome.devtools.recorder.registerRecorderExtensionPlugin(
    new MyPlugin(),
    /*name=*/ "Autoconsent",
    /*mediaType=*/ "application/json"
  );
}
