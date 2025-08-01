import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_velomobilforum.de_2va', ['https://www.velomobilforum.de/forum/index.php'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
