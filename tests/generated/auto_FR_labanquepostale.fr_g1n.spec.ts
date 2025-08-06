import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_labanquepostale.fr_g1n', ['https://www.labanquepostale.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
