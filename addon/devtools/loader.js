chrome.devtools.panels.create('Autoconsent', '/icons/cookie.png', '/devtools/panel.html');

if (chrome.devtools?.recorder) {
    class MyPlugin {
        /** @param {any} recording */
        stringify(recording) {
            const autoconsentSteps = recording.steps
                .filter((/** @type {any} */ step) => ['click'].includes(step.type))
                .map((/** @type {{ selectors: any }} */ { selectors }) => this.convertStep(selectors));
            return Promise.resolve(JSON.stringify(autoconsentSteps, undefined, 4));
        }
        /** @param {any} step */
        stringifyStep(step) {
            return Promise.resolve(JSON.stringify(this.convertStep(step.selectors), undefined, 4));
        }
        /** @param {(string | string[])[]} selectors */
        convertStep(selectors) {
            return {
                any: selectors
                    .filter((s) => {
                        return this.isSupportedSelector(s);
                    })
                    .map((s) => {
                        if (s.length === 1) {
                            return {
                                waitForThenClick: s[0],
                            };
                        }
                        return {
                            waitForThenClick: s,
                        };
                    }),
            };
        }

        /**
         * @param {string | string[]} selector
         * @returns {boolean}
         */
        isSupportedSelector(selector) {
            const unsupportedPrefixes = ['aria/', 'pierce/', 'text/'];
            if (!Array.isArray(selector)) {
                return !unsupportedPrefixes.some((p) => selector.startsWith(p));
            }
            // Chained xpath selectors are not supported
            if (selector.length > 1 && selector.some((s) => s.startsWith('xpath/'))) {
                return false;
            }
            return selector.every((s) => this.isSupportedSelector(s));
        }
    }

    chrome.devtools.recorder.registerRecorderExtensionPlugin(
        new MyPlugin(),
        /* name= */ 'Autoconsent',
        /* mediaType= */ 'application/json',
    );
}
