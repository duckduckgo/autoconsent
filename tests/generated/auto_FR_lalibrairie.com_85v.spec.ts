import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lalibrairie.com_85v', ['https://www.lalibrairie.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
