import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_canarywharf.com_v03', ['https://canarywharf.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
