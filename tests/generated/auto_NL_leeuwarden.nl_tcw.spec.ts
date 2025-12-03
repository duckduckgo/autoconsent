import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_leeuwarden.nl_tcw', ['https://www.leeuwarden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
