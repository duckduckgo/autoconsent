import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_culture.ec.europa.eu_cc0', ['https://culture.ec.europa.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
