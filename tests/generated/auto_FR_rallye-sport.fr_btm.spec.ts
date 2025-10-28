import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rallye-sport.fr_btm', ['https://www.rallye-sport.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
