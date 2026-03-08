import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_aigner-immobilien.de_nvz', ['https://aigner-immobilien.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
