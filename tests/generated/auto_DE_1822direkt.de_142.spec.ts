import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_1822direkt.de_142', ['https://www.1822direkt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
