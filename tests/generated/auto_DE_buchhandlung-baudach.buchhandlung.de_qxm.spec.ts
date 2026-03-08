import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_buchhandlung-baudach.buchhandlung.de_qxm', ['https://buchhandlung-baudach.buchhandlung.de/shop/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
