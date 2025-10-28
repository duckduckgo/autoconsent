import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hollandbikeshop.com_j1b', ['https://hollandbikeshop.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
