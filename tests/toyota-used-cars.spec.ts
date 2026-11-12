import generateCMPTests from '../playwright/runner';

// rejecting opens the cookie policy page, where the settings form is saved; the navigation drops the first self-test
generateCMPTests(
    'toyota-used-cars',
    ['https://pewneauto.pl/', 'https://uzywanetoyoty.pl/', 'https://lexusselect.cz/', 'https://toyotaminositetthasznalt.hu/'],
    {
        testSelfTest: false,
        expectedRuns: 2,
    },
);
