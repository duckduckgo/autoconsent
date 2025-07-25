import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lalibrairie.com_7jf', ['https://www.lalibrairie.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
