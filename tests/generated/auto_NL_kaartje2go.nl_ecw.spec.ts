import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kaartje2go.nl_ecw', ['https://www.kaartje2go.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
