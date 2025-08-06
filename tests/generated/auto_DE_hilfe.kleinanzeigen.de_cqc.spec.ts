import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hilfe.kleinanzeigen.de_cqc', ['https://hilfe.kleinanzeigen.de/hc/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
