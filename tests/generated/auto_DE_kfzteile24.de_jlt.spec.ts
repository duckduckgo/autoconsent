import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kfzteile24.de_jlt', ['https://www.kfzteile24.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
