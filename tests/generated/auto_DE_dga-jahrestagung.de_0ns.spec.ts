import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dga-jahrestagung.de_0ns', ['https://dga-jahrestagung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
