import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_checkyourfact.com_dr9', ['https://checkyourfact.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
