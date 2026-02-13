import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_advieskeuze.nl_ioj', ['https://www.advieskeuze.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
