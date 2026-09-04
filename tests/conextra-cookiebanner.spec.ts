import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'conextra-cookiebanner',
    ['https://shop.go-e.com/en/wallbox/go-e-charger-gemini-flex-2-0-11-kw/', 'https://gp-seifriedsberger.at/'],
    {
        // the selfTest asserts the rejected state, so it cannot pass after optIn
        testOptIn: false,
    },
);
