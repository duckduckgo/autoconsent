import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_reddrivingschool.com_8re', ['https://www.reddrivingschool.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
