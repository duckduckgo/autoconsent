import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zulassungsstelle.de_043', ['https://zulassungsstelle.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
