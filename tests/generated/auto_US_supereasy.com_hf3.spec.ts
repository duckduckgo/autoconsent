import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_supereasy.com_hf3', ['https://www.supereasy.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
