import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_carolin-escort.de_tdj', ['https://www.carolin-escort.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
