import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_publichealthscotland.scot_woh', ['https://publichealthscotland.scot/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
