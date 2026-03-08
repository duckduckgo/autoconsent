import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_augen-experte.de_1lp', ['https://augen-experte.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
