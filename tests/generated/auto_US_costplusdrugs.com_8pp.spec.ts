import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_costplusdrugs.com_8pp', ['https://www.costplusdrugs.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
