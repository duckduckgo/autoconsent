import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'Complianz optin',
    [
        // 'https://stetson.com/',
        'https://www.rnoh.nhs.uk/',
        // reloads on every decline and keeps showing the banner afterwards
        'https://www.sofiebadet.dk/book-tid',
        'https://www.lila.it/',
    ],
    {},
);
