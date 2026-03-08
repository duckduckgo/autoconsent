import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ensimag.grenoble-inp.fr_42u', ['https://ensimag.grenoble-inp.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
