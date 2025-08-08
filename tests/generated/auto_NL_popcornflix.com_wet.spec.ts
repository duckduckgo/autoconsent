import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_popcornflix.com_wet', ['https://popcornflix.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
