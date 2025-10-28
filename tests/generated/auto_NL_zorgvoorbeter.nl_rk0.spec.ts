import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zorgvoorbeter.nl_rk0', ['https://www.zorgvoorbeter.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
