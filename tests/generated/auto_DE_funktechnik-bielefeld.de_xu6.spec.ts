import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_funktechnik-bielefeld.de_xu6', ['https://www.funktechnik-bielefeld.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
