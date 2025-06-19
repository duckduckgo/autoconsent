import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_wunderground.com_j1a', ['https://www.wunderground.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
