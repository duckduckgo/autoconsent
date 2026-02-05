import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_museum-ludwig.de_bk8', ['https://www.museum-ludwig.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
