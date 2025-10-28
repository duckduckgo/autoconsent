import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_reclamations.fr_n91', ['https://reclamations.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
