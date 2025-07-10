import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_breitbart.com_u0l', ['https://www.breitbart.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
