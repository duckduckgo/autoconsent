import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nippongases.com_2xs', ['https://nippongases.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
