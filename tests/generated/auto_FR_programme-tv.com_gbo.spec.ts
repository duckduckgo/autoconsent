import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_programme-tv.com_gbo', ['https://www.programme-tv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
