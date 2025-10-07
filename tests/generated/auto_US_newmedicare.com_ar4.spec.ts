import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_newmedicare.com_ar4', ['https://newmedicare.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
