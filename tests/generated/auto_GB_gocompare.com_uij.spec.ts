import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gocompare.com_uij', ['https://www.gocompare.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
