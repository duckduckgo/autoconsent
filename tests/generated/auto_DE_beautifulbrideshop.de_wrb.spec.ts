import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_beautifulbrideshop.de_wrb', ['https://beautifulbrideshop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
