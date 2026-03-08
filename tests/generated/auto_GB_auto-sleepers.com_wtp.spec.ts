import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_auto-sleepers.com_wtp', ['https://auto-sleepers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
