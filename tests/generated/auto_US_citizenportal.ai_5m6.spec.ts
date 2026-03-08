import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_citizenportal.ai_5m6', ['https://citizenportal.ai/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
