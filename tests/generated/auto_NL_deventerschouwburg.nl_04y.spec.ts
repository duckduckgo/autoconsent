import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deventerschouwburg.nl_04y', ['https://deventerschouwburg.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
