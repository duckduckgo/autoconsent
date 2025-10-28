import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jeuxetcompagnie.fr_bbz', ['https://www.jeuxetcompagnie.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
