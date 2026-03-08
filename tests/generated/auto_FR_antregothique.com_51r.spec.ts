import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_antregothique.com_51r', ['https://antregothique.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
