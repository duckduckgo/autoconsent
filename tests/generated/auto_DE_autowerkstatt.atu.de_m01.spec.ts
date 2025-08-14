import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autowerkstatt.atu.de_m01', ['https://autowerkstatt.atu.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
