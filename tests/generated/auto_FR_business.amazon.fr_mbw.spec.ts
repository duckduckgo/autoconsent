import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_business.amazon.fr_mbw', ['https://business.amazon.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
