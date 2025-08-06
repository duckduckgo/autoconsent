import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hobby-caravan.de_i1f', ['https://www.hobby-caravan.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
