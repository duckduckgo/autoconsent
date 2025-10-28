import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_boardgamegeek.com_3zs', ['https://boardgamegeek.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
