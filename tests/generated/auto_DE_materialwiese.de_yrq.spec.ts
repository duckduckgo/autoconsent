import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_materialwiese.de_yrq', ['https://materialwiese.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
