import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_tractorpartsasap.com_yo8', ['https://www.tractorpartsasap.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
