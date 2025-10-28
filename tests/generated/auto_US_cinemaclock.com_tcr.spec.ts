import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cinemaclock.com_tcr', ['https://www.cinemaclock.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
