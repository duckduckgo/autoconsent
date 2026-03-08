import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_face-to-face-dating.de_hf5', ['https://face-to-face-dating.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
