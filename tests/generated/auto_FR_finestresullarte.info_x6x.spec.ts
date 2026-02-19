import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_finestresullarte.info_x6x', ['https://www.finestresullarte.info/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
