import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_collectivites-locales.gouv.fr_m7l', ['https://www.collectivites-locales.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
