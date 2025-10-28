import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_conseil-etat.fr_whw', ['https://www.conseil-etat.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
