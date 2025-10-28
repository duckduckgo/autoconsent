import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_memmingen-airport.de_f4k', ['https://www.memmingen-airport.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
