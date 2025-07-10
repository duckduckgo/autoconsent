import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_basketball-reference.com_oie', ['https://www.basketball-reference.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
