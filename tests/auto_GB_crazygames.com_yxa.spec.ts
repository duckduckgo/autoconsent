import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_crazygames.com_yxa', ['https://www.crazygames.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
