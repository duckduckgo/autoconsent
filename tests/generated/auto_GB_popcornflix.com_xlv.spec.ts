import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_popcornflix.com_xlv', ['https://popcornflix.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
