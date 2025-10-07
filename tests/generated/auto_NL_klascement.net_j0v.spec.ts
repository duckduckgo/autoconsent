import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_klascement.net_j0v', ['https://www.klascement.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
