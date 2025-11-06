import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_allelcoelec.fr_e2y', ['https://www.allelcoelec.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
