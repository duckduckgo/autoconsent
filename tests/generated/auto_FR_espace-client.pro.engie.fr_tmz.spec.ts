import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_espace-client.pro.engie.fr_tmz', ['https://espace-client.pro.engie.fr/user/auth?destination=/accueil'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
