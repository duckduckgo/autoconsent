import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deprinterstore.nl_kpi', ['https://deprinterstore.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
