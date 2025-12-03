import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_publichealthscotland.scot_nvx', ['https://publichealthscotland.scot/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
