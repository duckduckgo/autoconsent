import generateCMPTests from '../playwright/runner';

// No popup is shown to US visitors
generateCMPTests(
    'Uniconsent',
    [
        // popup in a shadow root on #uniccmp
        'https://www.autoforum.cz/',
        'https://synonymer.se/',
        'https://www.searchenginejournal.com/',
        // older markup without the shadow root
        'https://www.offen.net/',
    ],
    {
        skipRegions: ['US'],
    },
);
