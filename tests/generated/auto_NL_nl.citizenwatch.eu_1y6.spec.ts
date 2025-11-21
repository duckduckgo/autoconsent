import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.citizenwatch.eu_1y6', ['https://nl.citizenwatch.eu/nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
