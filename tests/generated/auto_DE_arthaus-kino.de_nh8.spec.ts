import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_arthaus-kino.de_nh8', ['https://arthaus-kino.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
