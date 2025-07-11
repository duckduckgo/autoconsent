import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_thenewstribune.com_1tv', ['https://www.thenewstribune.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
