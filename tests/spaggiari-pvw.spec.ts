import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'spaggiari-pvw',
    [
        'https://www.icmerano1.edu.it/',
        'https://www.bonfantini.it/',
        'https://www.liceodarwin.net/',
        'https://www.istruzioneliguria.gov.it/',
    ],
    {
        testSelfTest: false, // the page reloads as soon as consent is stored
    },
);
