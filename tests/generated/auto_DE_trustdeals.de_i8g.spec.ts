import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_trustdeals.de_i8g', ['https://www.trustdeals.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
