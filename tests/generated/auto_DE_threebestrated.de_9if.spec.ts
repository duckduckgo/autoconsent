import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_threebestrated.de_9if', ['https://threebestrated.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
