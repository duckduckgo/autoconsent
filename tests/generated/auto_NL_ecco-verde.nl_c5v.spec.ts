import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ecco-verde.nl_c5v', ['https://www.ecco-verde.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
