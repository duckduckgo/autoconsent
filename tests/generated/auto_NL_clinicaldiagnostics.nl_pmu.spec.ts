import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_clinicaldiagnostics.nl_pmu', ['https://clinicaldiagnostics.nl/nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
