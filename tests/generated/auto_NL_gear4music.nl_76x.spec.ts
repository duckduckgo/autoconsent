import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_gear4music.nl_76x', ['https://www.gear4music.nl/nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
