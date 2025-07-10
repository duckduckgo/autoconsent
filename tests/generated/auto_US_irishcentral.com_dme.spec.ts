import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_irishcentral.com_dme', ['https://www.irishcentral.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
