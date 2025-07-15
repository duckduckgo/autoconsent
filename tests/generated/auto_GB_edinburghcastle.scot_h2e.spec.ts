import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_edinburghcastle.scot_h2e', ['https://www.edinburghcastle.scot/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
