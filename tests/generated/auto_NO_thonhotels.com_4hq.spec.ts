import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_thonhotels.com_4hq', ['https://www.thonhotels.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
