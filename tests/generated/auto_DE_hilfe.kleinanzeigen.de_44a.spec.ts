import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hilfe.kleinanzeigen.de_44a', ['https://hilfe.kleinanzeigen.de/hc/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
