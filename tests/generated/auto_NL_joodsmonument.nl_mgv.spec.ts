import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_joodsmonument.nl_mgv', ['https://www.joodsmonument.nl/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
