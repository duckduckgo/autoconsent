import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_maschseefest.de_b7w', ['https://www.maschseefest.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
