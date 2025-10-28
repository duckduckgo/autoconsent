import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_smartsheet.com_dj7', ['https://www.smartsheet.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
