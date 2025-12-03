import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_monespace.generali.fr_y9b', ['https://www.monespace.generali.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
