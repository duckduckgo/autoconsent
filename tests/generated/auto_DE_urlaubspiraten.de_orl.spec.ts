import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_urlaubspiraten.de_orl', ['https://www.urlaubspiraten.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
