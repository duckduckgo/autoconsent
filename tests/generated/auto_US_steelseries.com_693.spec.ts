import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_steelseries.com_693', ['https://steelseries.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
