import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_thenewstribune.com_en0', ['https://www.thenewstribune.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
