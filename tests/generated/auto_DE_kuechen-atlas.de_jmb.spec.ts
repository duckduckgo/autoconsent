import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kuechen-atlas.de_jmb', ['https://www.kuechen-atlas.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
