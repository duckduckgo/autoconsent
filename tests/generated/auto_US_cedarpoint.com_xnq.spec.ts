import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cedarpoint.com_xnq', ['https://www.cedarpoint.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
