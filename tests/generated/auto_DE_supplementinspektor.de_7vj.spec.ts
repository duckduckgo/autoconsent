import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_supplementinspektor.de_7vj', ['https://supplementinspektor.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
