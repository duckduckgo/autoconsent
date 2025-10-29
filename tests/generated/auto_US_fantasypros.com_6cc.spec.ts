import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_fantasypros.com_6cc', ['https://www.fantasypros.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
