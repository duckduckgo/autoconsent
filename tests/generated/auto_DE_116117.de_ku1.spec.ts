import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_116117.de_ku1', ['https://www.116117.de/de/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
