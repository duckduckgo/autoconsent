import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_drk-blutspende.de_4kd', ['https://www.drk-blutspende.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
