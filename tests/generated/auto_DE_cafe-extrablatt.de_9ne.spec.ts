import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cafe-extrablatt.de_9ne', ['https://cafe-extrablatt.de/aktuell'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
