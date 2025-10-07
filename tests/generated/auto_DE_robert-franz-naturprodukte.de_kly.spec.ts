import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_robert-franz-naturprodukte.de_kly', ['https://robert-franz-naturprodukte.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
