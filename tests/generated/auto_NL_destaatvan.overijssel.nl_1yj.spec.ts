import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_destaatvan.overijssel.nl_1yj', ['https://destaatvan.overijssel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
