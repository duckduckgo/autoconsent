import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'mediawiki-cookieconsent',
    [
        'https://klexikon.zum.de/',
        'https://unterrichten.zum.de/',
        'https://nordhausen-wiki.de/',
        'https://edtech.wiki/',
        'https://www.wikibase.nl/',
    ],
    {
        testSelfTest: false,
    },
);
