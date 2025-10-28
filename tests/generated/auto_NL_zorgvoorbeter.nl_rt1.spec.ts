import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_zorgvoorbeter.nl_rt1', ['https://www.zorgvoorbeter.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
