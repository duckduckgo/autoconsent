import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_amsterdam.wereldmuseum.nl_cbx', ['https://amsterdam.wereldmuseum.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
