import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ausschreiben.de_cbu', ['https://ausschreiben.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
