import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thedailybeast.com_lpd', ['https://www.thedailybeast.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
