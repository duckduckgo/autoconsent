import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_biunsinnorden.de_cup', ['https://www.biunsinnorden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
