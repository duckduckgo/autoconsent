import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_phoenixreisen.com_21b', ['https://www.phoenixreisen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
