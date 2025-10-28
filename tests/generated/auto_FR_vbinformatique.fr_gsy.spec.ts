import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vbinformatique.fr_gsy', ['https://www.vbinformatique.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
