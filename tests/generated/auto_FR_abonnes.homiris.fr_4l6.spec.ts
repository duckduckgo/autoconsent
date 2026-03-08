import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_abonnes.homiris.fr_4l6', ['https://abonnes.homiris.fr/fr/identification/authentification.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
