import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klett-cotta.de_qk7', ['https://www.klett-cotta.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
