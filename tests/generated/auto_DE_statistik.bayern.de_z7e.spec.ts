import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_statistik.bayern.de_z7e', ['https://www.statistik.bayern.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
