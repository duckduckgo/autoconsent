import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_irishcentral.com_y4f', ['https://www.irishcentral.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
