import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fantasypros.com_jn7', ['https://www.fantasypros.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
