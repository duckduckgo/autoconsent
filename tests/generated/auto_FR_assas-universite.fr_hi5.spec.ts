import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_assas-universite.fr_hi5', ['https://www.assas-universite.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
