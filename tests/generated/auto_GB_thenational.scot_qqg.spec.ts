import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thenational.scot_qqg', ['https://www.thenational.scot/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
