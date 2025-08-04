import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pmepensioen.nl_bix', ['https://www.pmepensioen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
