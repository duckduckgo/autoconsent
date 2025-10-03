import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hoehle-loewen.de_tkm', ['https://hoehle-loewen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
