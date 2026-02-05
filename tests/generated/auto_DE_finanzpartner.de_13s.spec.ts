import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_finanzpartner.de_13s', ['https://www.finanzpartner.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
