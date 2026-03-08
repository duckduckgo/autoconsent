import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_armynavyoutdoors.com_mki', ['https://armynavyoutdoors.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
