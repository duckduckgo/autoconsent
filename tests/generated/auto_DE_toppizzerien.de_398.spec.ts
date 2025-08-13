import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_toppizzerien.de_398', ['https://toppizzerien.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
