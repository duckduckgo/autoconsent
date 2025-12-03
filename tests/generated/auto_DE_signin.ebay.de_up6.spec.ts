import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_signin.ebay.de_up6', ['https://signin.ebay.de/signin/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
