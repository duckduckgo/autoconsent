import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bobsredmill.com_49q', ['https://www.bobsredmill.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
