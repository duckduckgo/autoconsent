import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cannaconnection.de_rt0', ['https://www.cannaconnection.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
