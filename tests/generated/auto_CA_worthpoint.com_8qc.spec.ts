import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_worthpoint.com_8qc', ['https://www.worthpoint.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
