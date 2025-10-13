import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stadsschouwburg-utrecht.nl_tcz', ['https://stadsschouwburg-utrecht.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
