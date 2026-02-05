import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_livingspaces.com_14u', ['https://www.livingspaces.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
