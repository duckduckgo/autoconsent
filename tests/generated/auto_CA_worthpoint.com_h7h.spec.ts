import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_worthpoint.com_h7h', ['https://www.worthpoint.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
