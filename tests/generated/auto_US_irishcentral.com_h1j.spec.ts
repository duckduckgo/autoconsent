import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_irishcentral.com_h1j', ['https://www.irishcentral.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
