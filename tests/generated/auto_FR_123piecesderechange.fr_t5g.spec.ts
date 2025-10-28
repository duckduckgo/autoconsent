import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_123piecesderechange.fr_t5g', ['https://www.123piecesderechange.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
