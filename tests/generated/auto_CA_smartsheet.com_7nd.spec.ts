import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_smartsheet.com_7nd', ['https://www.smartsheet.com/home-overview'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
