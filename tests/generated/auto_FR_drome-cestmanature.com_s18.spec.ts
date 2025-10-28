import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_drome-cestmanature.com_s18', ['https://www.drome-cestmanature.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
