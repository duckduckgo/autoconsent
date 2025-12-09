import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_costplusdrugs.com_mgv', ['https://www.costplusdrugs.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
