import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_meine-kartenmanufaktur.de_4ag', ['https://www.meine-kartenmanufaktur.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
