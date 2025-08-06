import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_naturhaeuschen.de_kib', ['https://www.naturhaeuschen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
