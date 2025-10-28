import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sport-passion.fr_0nl', ['https://www.sport-passion.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
