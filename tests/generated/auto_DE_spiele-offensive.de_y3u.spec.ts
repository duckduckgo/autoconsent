import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spiele-offensive.de_y3u', ['https://www.spiele-offensive.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
