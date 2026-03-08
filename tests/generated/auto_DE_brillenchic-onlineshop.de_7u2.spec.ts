import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_brillenchic-onlineshop.de_7u2', ['https://brillenchic-onlineshop.de/en/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
