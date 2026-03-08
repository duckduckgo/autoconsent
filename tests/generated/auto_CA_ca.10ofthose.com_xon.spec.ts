import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ca.10ofthose.com_xon', ['https://ca.10ofthose.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
