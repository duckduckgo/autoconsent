import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kfzteile24.de_32e', ['https://www.kfzteile24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
