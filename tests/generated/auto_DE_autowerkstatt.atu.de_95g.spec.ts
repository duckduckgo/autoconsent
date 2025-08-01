import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_autowerkstatt.atu.de_95g', ['https://autowerkstatt.atu.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
