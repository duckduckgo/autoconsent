import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_economist.com_vvi', ['https://www.economist.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
