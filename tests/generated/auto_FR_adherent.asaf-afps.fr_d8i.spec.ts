import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_adherent.asaf-afps.fr_d8i', ['https://adherent.asaf-afps.fr/connexion'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
