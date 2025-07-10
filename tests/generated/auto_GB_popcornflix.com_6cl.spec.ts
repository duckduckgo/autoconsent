import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_popcornflix.com_6cl', ['https://popcornflix.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
