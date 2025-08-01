import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_framesdirect.com_0', ['https://www.framesdirect.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
