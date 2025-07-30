import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cannaconnection.de_j6l', ['https://www.cannaconnection.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
