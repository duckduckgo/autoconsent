import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_baufoerderung.de_e8f', ['https://baufoerderung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
