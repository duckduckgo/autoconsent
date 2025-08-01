import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_joodsmonument.nl_d6r', ['https://www.joodsmonument.nl/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
