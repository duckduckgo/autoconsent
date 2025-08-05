import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pmepensioen.nl_f1f', ['https://www.pmepensioen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
