import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'optum-legal-banner',
    ['https://www.optumrx.com/', 'https://www.optumbank.com/', 'https://www.genoahealthcare.com/', 'https://www.uhchousecalls.com/'],
    {
        testOptIn: false,
    },
);
