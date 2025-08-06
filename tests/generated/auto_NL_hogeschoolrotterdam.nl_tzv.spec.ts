import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hogeschoolrotterdam.nl_tzv', ['https://www.hogeschoolrotterdam.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
