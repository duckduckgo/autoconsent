import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_documentation.chaos.com_sya', ['https://documentation.chaos.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
