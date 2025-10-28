import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_amazingoriental.com_tsw', ['https://amazingoriental.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
