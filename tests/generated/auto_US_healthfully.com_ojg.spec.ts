import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_healthfully.com_ojg', ['https://healthfully.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
