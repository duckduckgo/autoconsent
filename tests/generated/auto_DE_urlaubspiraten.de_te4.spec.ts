import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_urlaubspiraten.de_te4', ['https://www.urlaubspiraten.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
