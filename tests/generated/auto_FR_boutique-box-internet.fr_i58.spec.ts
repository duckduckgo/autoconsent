import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_boutique-box-internet.fr_i58', ['https://www.boutique-box-internet.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
