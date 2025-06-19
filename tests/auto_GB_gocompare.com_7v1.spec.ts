import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_gocompare.com_7v1', ['https://www.gocompare.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
