import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_CH_aol.com_tp9',
    ['https://consent.aol.com/v2/collectConsent?sessionId=3_cc-session_06a2ddd8-9e43-4162-b9b2-2c5340569ebb'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] },
);
