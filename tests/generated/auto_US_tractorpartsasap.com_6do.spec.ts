import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_tractorpartsasap.com_6do', ['https://www.tractorpartsasap.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
