import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cedarpoint.com_wup', ['https://www.cedarpoint.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
