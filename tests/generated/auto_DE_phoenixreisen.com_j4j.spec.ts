import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_phoenixreisen.com_j4j', ['https://www.phoenixreisen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
