import generateCMPTests from '../playwright/runner';

// The eagerly-tools-cookie WordPress plugin. The banner has no reject button, so the opt-out
// unchecks the pre-selected optional categories and saves via "Accepteer selectie".
// No self-test: the plugin reloads the page as soon as consent is stored, which tears down the
// content script before a self-test could run.
generateCMPTests(
    'eagerly-tools-cookie',
    [
        // tracking category pre-selected
        'https://mge.nl/agenda/air/',
        'https://eagerly.nl/',
        // extra "statistics" category alongside tracking
        'https://www.flint.nl/',
        'https://www.kunstcentraal.nl/',
    ],
    {},
);
