import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hoehle-loewen.de_xle', ['https://hoehle-loewen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
