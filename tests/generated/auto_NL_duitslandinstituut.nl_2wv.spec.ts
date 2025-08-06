import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_duitslandinstituut.nl_2wv', ['https://duitslandinstituut.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
