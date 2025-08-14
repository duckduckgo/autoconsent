import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_duitslandinstituut.nl_d4q', ['https://duitslandinstituut.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
