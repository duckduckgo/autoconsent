import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vrm-trauer.de_3vy', ['https://www.vrm-trauer.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
