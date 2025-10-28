import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_volkswagen.fr_rep', ['https://www.volkswagen.fr/fr.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
