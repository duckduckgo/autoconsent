import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_nordkirche.de_7rm', ['https://www.nordkirche.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
