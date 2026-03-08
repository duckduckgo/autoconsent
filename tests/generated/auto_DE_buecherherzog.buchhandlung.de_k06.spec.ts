import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_buecherherzog.buchhandlung.de_k06', ['https://buecherherzog.buchhandlung.de/shop/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
