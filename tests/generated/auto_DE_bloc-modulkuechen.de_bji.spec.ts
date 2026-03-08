import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bloc-modulkuechen.de_bji', ['https://bloc-modulkuechen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
