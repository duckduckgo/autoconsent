import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_1822direkt.de_i95', ['https://www.1822direkt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
