import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_biodiversite.gouv.fr_bco', ['https://biodiversite.gouv.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
