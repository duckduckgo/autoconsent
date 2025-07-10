import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_espncricinfo.com_m9k', ['https://www.espncricinfo.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
