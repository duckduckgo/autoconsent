import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_baseball-reference.com_rvq', ['https://www.baseball-reference.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
