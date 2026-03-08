import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_codierung.adfc.de_m94', ['https://codierung.adfc.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
