import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_biunsinnorden.de_cqh', ['https://www.biunsinnorden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
