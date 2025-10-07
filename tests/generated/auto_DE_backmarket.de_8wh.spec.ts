import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_backmarket.de_8wh', ['https://www.backmarket.de/de-de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
