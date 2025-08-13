import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_maschseefest.de_t2y', ['https://www.maschseefest.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
