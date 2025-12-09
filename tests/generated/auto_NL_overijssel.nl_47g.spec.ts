import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_overijssel.nl_47g', ['https://www.overijssel.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
