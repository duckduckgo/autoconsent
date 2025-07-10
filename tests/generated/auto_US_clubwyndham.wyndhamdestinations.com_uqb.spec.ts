import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_clubwyndham.wyndhamdestinations.com_uqb', ['https://clubwyndham.wyndhamdestinations.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
