import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_baufoerderung.de_b4h', ['https://baufoerderung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
