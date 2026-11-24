import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'Complianz optin',
    [
        // 'https://stetson.com/',
        // 'https://marahoffman.com/', // no longer shows the banner
        'https://aktienfinder.net/',
        'https://www.rnoh.nhs.uk/',
        // popup must be fully faded in before the click, and stays clickable at opacity 0 unless hidden
        'https://www.rogercastillo.org/',
        // Securiti flavor: no reject button, opt out via the preference center
        'https://www.jbhunt.com/',
    ],
    {},
);
