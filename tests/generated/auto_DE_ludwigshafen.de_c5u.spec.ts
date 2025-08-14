import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ludwigshafen.de_c5u', ['https://ludwigshafen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
