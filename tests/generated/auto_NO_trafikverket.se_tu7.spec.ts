import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_trafikverket.se_tu7', ['https://www.trafikverket.se/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
