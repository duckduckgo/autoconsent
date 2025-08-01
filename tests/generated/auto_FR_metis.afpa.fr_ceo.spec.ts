import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_metis.afpa.fr_ceo', ['https://metis.afpa.fr/login/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
