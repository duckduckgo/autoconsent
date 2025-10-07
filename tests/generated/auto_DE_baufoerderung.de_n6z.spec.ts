import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_baufoerderung.de_n6z', ['https://baufoerderung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
