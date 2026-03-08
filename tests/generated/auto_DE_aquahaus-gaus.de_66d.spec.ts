import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aquahaus-gaus.de_66d', ['https://aquahaus-gaus.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
