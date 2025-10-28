import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_horror-shop.com_urw', ['https://www.horror-shop.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
