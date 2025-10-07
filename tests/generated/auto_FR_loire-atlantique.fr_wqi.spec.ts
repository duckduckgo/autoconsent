import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_loire-atlantique.fr_wqi', ['https://www.loire-atlantique.fr/44/accueil/c_1155312'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
