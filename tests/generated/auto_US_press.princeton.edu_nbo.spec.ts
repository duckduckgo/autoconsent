import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_press.princeton.edu_nbo', ['https://press.princeton.edu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
