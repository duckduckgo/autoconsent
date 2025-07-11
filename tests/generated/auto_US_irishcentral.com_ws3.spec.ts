import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_irishcentral.com_ws3', ['https://www.irishcentral.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
