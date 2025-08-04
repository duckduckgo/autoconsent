import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_joodsmonument.nl_dd4', ['https://www.joodsmonument.nl/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
