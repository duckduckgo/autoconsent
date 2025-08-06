import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mindfactory.de_0ir', ['https://www.mindfactory.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
