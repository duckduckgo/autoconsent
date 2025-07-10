import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_hermanmiller.com_a6q', ['https://www.hermanmiller.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
