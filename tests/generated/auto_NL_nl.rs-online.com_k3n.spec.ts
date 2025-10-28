import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.rs-online.com_k3n', ['https://nl.rs-online.com/web/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
