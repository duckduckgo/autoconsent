import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dasrehaportal.de_ske', ['https://www.dasrehaportal.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
