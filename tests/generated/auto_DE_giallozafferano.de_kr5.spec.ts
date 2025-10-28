import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_giallozafferano.de_kr5', ['https://www.giallozafferano.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
