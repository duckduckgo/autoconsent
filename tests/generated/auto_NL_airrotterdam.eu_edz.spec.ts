import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_airrotterdam.eu_edz', ['https://airrotterdam.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
