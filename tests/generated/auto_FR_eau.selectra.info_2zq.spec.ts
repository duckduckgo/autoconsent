import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eau.selectra.info_2zq', ['https://eau.selectra.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
