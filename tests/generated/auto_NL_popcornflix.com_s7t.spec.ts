import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_popcornflix.com_s7t', ['https://popcornflix.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
