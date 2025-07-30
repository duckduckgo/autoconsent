import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_peptidesciences.com_0', ['https://www.peptidesciences.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
