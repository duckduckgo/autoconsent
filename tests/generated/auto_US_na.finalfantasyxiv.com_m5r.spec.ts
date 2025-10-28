import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_na.finalfantasyxiv.com_m5r', ['https://na.finalfantasyxiv.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
