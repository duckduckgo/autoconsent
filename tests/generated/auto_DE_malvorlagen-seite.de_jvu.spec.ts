import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_malvorlagen-seite.de_jvu', ['https://malvorlagen-seite.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
