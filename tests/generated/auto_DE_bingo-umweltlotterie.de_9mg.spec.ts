import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bingo-umweltlotterie.de_9mg', ['https://www.bingo-umweltlotterie.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
