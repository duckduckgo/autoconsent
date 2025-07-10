import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sparknotes.com_709', ['https://www.sparknotes.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
