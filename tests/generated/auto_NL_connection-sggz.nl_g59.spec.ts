import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_connection-sggz.nl_g59', ['https://connection-sggz.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
