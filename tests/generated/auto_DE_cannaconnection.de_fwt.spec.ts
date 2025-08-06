import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cannaconnection.de_fwt', ['https://www.cannaconnection.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
