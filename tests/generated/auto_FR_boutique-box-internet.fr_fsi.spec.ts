import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boutique-box-internet.fr_fsi', ['https://www.boutique-box-internet.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
