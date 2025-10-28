import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_iledefrance-mobilites.fr_gci', ['https://www.iledefrance-mobilites.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
