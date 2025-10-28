import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_footmarseillais.com_j5a', ['https://www.footmarseillais.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
