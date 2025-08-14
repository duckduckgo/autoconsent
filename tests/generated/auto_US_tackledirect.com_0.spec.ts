import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_tackledirect.com_0', ['https://www.tackledirect.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
