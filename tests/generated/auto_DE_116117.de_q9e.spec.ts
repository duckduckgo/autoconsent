import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_116117.de_q9e', ['https://www.116117.de/de/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
