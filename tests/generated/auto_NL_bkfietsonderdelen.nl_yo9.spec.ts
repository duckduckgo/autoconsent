import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bkfietsonderdelen.nl_yo9', ['https://bkfietsonderdelen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
