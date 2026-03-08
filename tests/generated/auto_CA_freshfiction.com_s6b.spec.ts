import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_freshfiction.com_s6b', ['https://freshfiction.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
