import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_arthaus-kino.de_skj', ['https://arthaus-kino.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
