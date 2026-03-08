import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_enkhuizen.sp.nl_0on', ['https://enkhuizen.sp.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
