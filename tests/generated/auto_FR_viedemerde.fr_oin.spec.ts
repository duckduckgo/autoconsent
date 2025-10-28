import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_viedemerde.fr_oin', ['https://www.viedemerde.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
