import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_116117-termine.de_nwg', ['https://www.116117-termine.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
