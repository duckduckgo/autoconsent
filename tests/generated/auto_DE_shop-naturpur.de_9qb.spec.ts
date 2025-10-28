import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shop-naturpur.de_9qb', ['https://www.shop-naturpur.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
