import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nordicwellness.se_947', ['https://nordicwellness.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
