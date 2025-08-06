import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_laura-dahlmeier.de_n86', ['https://laura-dahlmeier.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
