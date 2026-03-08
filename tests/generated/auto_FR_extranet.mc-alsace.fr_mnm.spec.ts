import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_extranet.mc-alsace.fr_mnm', ['https://extranet.mc-alsace.fr/connexion?typeAcces=MAP.AB'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
