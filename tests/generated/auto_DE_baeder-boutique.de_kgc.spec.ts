import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_baeder-boutique.de_kgc', ['https://baeder-boutique.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
