import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spiele-offensive.de_yu6', ['https://www.spiele-offensive.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
