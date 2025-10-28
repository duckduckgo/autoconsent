import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_shipscience.com_zlz', ['https://www.shipscience.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
