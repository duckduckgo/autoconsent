import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dauphine.psl.eu_bqu', ['https://dauphine.psl.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
