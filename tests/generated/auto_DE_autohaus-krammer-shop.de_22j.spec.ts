import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autohaus-krammer-shop.de_22j', ['https://autohaus-krammer-shop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
