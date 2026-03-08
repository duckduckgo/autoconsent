import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_allesvoorscooters.nl_3eh', ['https://allesvoorscooters.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
