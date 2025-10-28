import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_akouashop.com_t0w', ['https://www.akouashop.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
