import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_homebanking-hilfe.de_i7w', ['https://homebanking-hilfe.de/forum/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
