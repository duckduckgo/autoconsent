import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_popcornflix.com_y4e', ['https://popcornflix.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
