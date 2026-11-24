import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'belarus-cookie-info',
    [
        'https://belta.by/',
        'https://eng.belta.by/',
        'https://ont.by/',
        'https://mininform.gov.by/',
        'https://belneftekhim.by/',
        'https://aqua-minsk.by/',
    ],
    {
        // the site reloads the page right after the click, racing the self-test
        testSelfTest: false,
    },
);
