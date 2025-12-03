import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_klett-cotta.de_p8b', ['https://www.klett-cotta.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
