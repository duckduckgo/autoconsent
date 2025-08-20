import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boutique.arte.tv_ljx', ['https://boutique.arte.tv/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
