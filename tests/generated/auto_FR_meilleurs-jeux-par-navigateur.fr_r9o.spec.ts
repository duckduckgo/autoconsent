import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_meilleurs-jeux-par-navigateur.fr_r9o', ['https://www.meilleurs-jeux-par-navigateur.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
