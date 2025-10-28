import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_catalog-prospectus.fr_j1f', ['https://www.catalog-prospectus.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
