import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_janbommerez.com_x0x', ['https://janbommerez.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
