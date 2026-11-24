import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'trillian',
    [
        'https://www.ouh.nhs.uk/',
        'https://www.sexualhealthoxfordshire.nhs.uk/',
        'https://www.healthinnovationoxford.org/',
        'https://www.thehilloxford.org/',
    ],
    {
        // the page reloads after a choice, so the self-test message is lost
        testSelfTest: false,
    },
);
