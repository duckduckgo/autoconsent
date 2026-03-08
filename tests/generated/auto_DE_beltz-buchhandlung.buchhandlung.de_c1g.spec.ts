import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_beltz-buchhandlung.buchhandlung.de_c1g', ['https://beltz-buchhandlung.buchhandlung.de/shop/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
