import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gasometer.de_dk8', ['https://www.gasometer.de/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
