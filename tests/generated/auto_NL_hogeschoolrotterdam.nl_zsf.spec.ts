import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hogeschoolrotterdam.nl_zsf', ['https://www.hogeschoolrotterdam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
