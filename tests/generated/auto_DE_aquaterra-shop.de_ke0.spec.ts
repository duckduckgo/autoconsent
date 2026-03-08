import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aquaterra-shop.de_ke0', ['https://aquaterra-shop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
