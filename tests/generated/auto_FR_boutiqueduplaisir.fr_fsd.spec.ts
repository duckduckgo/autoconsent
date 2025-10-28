import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boutiqueduplaisir.fr_fsd', ['https://boutiqueduplaisir.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
