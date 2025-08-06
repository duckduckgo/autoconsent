import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_homebanking-hilfe.de_dxt', ['https://homebanking-hilfe.de/forum/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
