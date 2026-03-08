import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boutique.lavachequirit.com_rgk', ['https://boutique.lavachequirit.com/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
