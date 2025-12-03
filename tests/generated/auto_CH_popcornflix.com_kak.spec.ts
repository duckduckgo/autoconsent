import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_popcornflix.com_kak', ['https://popcornflix.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
