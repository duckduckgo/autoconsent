import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_anhaenger-beleuchtung.de_3wu', ['https://anhaenger-beleuchtung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
