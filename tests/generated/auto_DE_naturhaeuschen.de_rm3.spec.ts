import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_naturhaeuschen.de_rm3', ['https://www.naturhaeuschen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
