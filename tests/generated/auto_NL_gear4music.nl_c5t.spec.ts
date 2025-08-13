import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gear4music.nl_c5t', ['https://www.gear4music.nl/nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
