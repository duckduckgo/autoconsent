import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_forum.quechoisir.org_5mz', ['https://forum.quechoisir.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
