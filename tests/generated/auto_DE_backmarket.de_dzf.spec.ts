import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_backmarket.de_dzf', ['https://www.backmarket.de/de-de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
