import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gasometer.de_0xw', ['https://www.gasometer.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
