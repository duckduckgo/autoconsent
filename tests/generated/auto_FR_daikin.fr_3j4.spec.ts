import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_daikin.fr_3j4', ['https://www.daikin.fr/fr_fr/residentiel.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
