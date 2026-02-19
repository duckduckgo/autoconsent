import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maboussoleaidants.fr_f8f', ['https://maboussoleaidants.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
