import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wissenschaft-shop.de_y1r', ['https://www.wissenschaft-shop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
