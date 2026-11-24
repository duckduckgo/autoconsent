import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'help-ch',
    [
        'https://www.wirtschaftsregister.ch/',
        'https://www.gemeinderegister.ch/',
        'https://www.registreducommerce.ch/',
        'https://www.plz-postleitzahl.ch/',
    ],
    {
        testSelfTest: false,
    },
);
