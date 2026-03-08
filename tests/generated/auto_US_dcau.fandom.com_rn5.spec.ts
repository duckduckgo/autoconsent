import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dcau.fandom.com_rn5', ['https://dcau.fandom.com/wiki/DCAU_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
