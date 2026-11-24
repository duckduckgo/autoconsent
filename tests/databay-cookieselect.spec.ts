import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'databay-cookieselect',
    ['https://www.staedteregion-aachen.de/', 'https://www.databay.de/', 'https://lzkh.de/', 'https://danrw.de/'],
    {
        // the site reloads the page after saving consent
        testSelfTest: false,
    },
);
