import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rote-liste.de_fbv', ['https://www.rote-liste.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
