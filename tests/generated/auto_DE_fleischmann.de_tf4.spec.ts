import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fleischmann.de_tf4', ['https://www.fleischmann.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
