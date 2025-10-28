import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chaussuresdegatine.fr_ymt', ['https://chaussuresdegatine.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
