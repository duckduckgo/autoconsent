import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_observatoire-des-territoires.gouv.fr_plv', ['https://www.observatoire-des-territoires.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
