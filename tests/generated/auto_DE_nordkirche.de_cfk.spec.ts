import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_nordkirche.de_cfk', ['https://www.nordkirche.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
