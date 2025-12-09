import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_schweitzer-online.de_ck7', ['https://www.schweitzer-online.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
