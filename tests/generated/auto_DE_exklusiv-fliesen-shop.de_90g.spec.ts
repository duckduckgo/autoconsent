import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_exklusiv-fliesen-shop.de_90g', ['https://exklusiv-fliesen-shop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
