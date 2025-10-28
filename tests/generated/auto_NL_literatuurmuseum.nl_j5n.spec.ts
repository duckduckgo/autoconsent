import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_literatuurmuseum.nl_j5n', ['https://literatuurmuseum.nl/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
