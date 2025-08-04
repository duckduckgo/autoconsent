import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cannaconnection.de_0hu', ['https://www.cannaconnection.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
