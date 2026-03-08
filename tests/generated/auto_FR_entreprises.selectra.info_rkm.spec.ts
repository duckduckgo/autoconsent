import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_entreprises.selectra.info_rkm', ['https://entreprises.selectra.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
