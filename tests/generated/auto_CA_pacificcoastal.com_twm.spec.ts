import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_pacificcoastal.com_twm', ['https://www.pacificcoastal.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
