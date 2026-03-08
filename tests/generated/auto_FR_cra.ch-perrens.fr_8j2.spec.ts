import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cra.ch-perrens.fr_8j2', ['https://cra.ch-perrens.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
