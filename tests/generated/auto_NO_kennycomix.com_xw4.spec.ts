import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kennycomix.com_xw4', ['https://www.kennycomix.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
