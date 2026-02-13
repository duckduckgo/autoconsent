import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_m.adultwork.com_59d', ['https://m.adultwork.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
