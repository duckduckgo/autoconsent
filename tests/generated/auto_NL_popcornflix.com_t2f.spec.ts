import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_popcornflix.com_t2f', ['https://popcornflix.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
