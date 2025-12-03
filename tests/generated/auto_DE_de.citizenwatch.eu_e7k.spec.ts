import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.citizenwatch.eu_e7k', ['https://de.citizenwatch.eu/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
