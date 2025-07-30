import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_france24.com_tf1', ['https://www.france24.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
