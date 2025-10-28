import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dordogne-perigord-tourisme.fr_fkc', ['https://www.dordogne-perigord-tourisme.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
