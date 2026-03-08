import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brasseriedeboerderij.nl_shs', ['https://brasseriedeboerderij.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
