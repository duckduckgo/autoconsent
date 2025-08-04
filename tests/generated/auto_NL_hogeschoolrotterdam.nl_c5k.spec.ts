import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hogeschoolrotterdam.nl_c5k', ['https://www.hogeschoolrotterdam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
