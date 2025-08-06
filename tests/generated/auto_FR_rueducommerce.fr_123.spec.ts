import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rueducommerce.fr_123', ['https://www.rueducommerce.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
