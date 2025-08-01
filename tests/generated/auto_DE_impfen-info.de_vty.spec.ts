import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_impfen-info.de_vty', ['https://www.impfen-info.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
