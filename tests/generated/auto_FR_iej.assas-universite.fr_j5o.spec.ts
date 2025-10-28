import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_iej.assas-universite.fr_j5o', ['https://iej.assas-universite.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
