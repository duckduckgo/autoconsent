import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_pmepensioen.nl_2d3', ['https://www.pmepensioen.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
