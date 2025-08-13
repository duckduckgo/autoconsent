import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_biunsinnorden.de_kwa', ['https://www.biunsinnorden.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
