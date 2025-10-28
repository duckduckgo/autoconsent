import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bobsredmill.com_djh', ['https://www.bobsredmill.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
