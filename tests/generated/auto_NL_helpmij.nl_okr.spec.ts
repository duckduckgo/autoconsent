import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_helpmij.nl_okr', ['https://www.helpmij.nl/forum/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
