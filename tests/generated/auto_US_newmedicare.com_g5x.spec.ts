import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_newmedicare.com_g5x', ['https://newmedicare.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
