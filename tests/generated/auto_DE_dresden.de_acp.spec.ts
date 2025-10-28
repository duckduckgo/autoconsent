import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dresden.de_acp', ['https://www.dresden.de/index_de.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
