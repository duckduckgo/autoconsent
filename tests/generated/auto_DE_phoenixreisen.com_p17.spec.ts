import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_phoenixreisen.com_p17', ['https://www.phoenixreisen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
