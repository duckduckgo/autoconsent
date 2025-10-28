import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mon-administration.com_zl1', ['https://mon-administration.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
