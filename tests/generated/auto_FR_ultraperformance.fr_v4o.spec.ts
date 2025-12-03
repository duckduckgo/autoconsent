import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ultraperformance.fr_v4o', ['https://www.ultraperformance.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
