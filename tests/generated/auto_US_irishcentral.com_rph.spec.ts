import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_irishcentral.com_rph', ['https://www.irishcentral.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
