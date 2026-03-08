import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_feuerwehrstore.de_rao', ['https://feuerwehrstore.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
