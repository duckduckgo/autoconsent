import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gocompare.com_u7e', ['https://www.gocompare.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
