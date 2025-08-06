import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_funktechnik-bielefeld.de_i2u', ['https://www.funktechnik-bielefeld.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
