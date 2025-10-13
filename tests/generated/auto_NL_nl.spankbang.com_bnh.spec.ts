import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nl.spankbang.com_bnh', ['https://nl.spankbang.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
