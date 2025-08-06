import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_joodsmonument.nl_8up', ['https://www.joodsmonument.nl/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
