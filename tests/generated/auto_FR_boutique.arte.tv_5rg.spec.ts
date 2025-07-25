import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boutique.arte.tv_5rg', ['https://boutique.arte.tv/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
