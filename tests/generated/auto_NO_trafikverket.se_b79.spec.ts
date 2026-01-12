import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_trafikverket.se_b79', ['https://www.trafikverket.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
