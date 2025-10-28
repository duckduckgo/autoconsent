import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vol-direct.fr_9fn', ['https://www.vol-direct.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
