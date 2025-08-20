import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_europass.europa.eu_8xa', ['https://europass.europa.eu/select-language?destination=/node/1'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
