import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hobby-caravan.de_3x5', ['https://www.hobby-caravan.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
