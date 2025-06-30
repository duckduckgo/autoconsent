import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wunderground.com_pr6', ['https://www.wunderground.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
