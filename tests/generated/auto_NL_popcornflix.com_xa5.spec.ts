import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_popcornflix.com_xa5', ['https://popcornflix.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
