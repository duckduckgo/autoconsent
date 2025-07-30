import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_irishcentral.com_1wl', ['https://www.irishcentral.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
