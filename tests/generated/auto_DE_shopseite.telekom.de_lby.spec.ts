import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shopseite.telekom.de_lby', ['https://shopseite.telekom.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
