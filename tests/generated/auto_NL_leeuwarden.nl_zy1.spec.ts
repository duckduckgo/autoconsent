import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_leeuwarden.nl_zy1', ['https://www.leeuwarden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
