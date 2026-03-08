import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_en.selectra.info_d4c', ['https://en.selectra.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
