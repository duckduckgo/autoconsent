import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_impfen-info.de_am5', ['https://www.impfen-info.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
