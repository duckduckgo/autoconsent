import generateCMPTests from '../playwright/runner';

// sites reload the page after the consent choice, so the self-test cannot run
generateCMPTests(
    'netl-gdpr',
    [
        'https://www.geomar.de/',
        'https://evangelische-jugend-luebeck-lauenburg.de/',
        'https://www.diakonie-sh.de/',
        'https://www.merz-dental.de/',
        'https://www.befg.de/',
    ],
    {
        testSelfTest: false,
    },
);
