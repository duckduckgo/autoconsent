import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lalibrairie.com_0lt', ['https://www.lalibrairie.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
