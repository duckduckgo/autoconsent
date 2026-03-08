import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_moncompte.numericable.fr_qhb', ['https://connexion.numericable.fr/Oauth/Oauth.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
