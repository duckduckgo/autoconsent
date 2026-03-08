import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_codewithmosh.com_grb', ['https://codewithmosh.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
