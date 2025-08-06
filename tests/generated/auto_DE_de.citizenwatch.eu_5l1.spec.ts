import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.citizenwatch.eu_5l1', ['https://de.citizenwatch.eu/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
