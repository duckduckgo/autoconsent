import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_crazygames.com_m3r', ['https://www.crazygames.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
