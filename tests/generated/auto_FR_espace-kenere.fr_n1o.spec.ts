import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_espace-kenere.fr_n1o', ['https://espace-kenere.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
