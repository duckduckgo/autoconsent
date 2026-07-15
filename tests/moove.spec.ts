import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'Moove',
    [
        'https://impact.parkinson.org/',
        'https://wamu.org/',
        'https://kulturnews.de/',
        'https://gcloyola.com/autor/fernando-vidal/',
        // Broken plugin instance: clicking the settings button leaves the page
        // in a broken state (dark lightbox overlay + scroll lock) without
        // opening the settings modal. Exercises the fallback cleanup path.
        'https://veneziataxi.it/en/',
    ],
    {},
);
