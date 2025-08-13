import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_elbphilharmonie.de_0hp', ['https://www.elbphilharmonie.de/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
