import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_uk.news.yahoo.com_ccx',
    ['https://consent.yahoo.com/v2/collectConsent?sessionId=4_cc-session_d51396e9-d142-4525-a04d-307e5d6c93b1'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
