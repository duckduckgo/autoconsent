import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_carolin-escort.de_zfb', ['https://www.carolin-escort.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
