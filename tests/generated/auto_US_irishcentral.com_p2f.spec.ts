import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_irishcentral.com_p2f', ['https://www.irishcentral.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
