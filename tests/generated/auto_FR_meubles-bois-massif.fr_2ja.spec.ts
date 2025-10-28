import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meubles-bois-massif.fr_2ja', ['https://m.meubles-bois-massif.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
