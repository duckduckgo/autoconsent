import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bogensportschmid.de_5ct', ['https://bogensportschmid.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
