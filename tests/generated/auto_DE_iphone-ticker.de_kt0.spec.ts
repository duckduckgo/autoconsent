import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_iphone-ticker.de_kt0', ['https://www.iphone-ticker.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
