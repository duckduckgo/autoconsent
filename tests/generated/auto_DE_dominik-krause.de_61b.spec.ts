import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dominik-krause.de_61b', ['https://dominik-krause.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
