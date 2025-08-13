import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bad-nauheim.de_xbz', ['https://www.bad-nauheim.de/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
