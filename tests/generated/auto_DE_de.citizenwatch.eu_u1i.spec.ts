import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_de.citizenwatch.eu_u1i', ['https://de.citizenwatch.eu/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
