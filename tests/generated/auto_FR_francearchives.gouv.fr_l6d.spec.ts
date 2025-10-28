import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_francearchives.gouv.fr_l6d', ['https://francearchives.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
