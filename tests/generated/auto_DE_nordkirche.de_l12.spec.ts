import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_nordkirche.de_l12', ['https://www.nordkirche.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
