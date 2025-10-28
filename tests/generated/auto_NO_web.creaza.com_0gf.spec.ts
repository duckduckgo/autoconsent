import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_web.creaza.com_0gf', ['https://web.creaza.com/no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
