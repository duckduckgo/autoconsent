import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_france24.com_ghz', ['https://www.france24.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
