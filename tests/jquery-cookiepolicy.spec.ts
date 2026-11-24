import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'jquery-cookiepolicy',
    ['https://pkw.gov.pl/', 'https://www.etwinning.pl/', 'https://pzw.org.pl/', 'https://myslowice.pl/'],
    {
        // the page reloads after a consent choice, so the self-test result is lost
        testSelfTest: false,
    },
);
