import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_janbommerez.com_089', ['https://janbommerez.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
