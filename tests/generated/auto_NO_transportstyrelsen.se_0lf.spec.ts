import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_transportstyrelsen.se_0lf', ['https://www.transportstyrelsen.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
