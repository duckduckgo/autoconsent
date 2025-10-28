import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ziektevrijleven.nl_g9b', ['https://www.ziektevrijleven.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
