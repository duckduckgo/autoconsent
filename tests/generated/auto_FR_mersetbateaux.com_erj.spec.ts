import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mersetbateaux.com_erj', ['https://mersetbateaux.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
