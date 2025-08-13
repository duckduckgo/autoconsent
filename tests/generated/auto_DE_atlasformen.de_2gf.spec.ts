import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_atlasformen.de_2gf', ['https://www.atlasformen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
