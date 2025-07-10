import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_charbroil.com_y5x', ['https://www.charbroil.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
