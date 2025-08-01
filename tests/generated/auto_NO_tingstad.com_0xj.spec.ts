import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_tingstad.com_0xj', ['https://www.tingstad.com/se-sv'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
