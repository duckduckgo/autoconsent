import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hoehle-loewen.de_1rf', ['https://hoehle-loewen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
