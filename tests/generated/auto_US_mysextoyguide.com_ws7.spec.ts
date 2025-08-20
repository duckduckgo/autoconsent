import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_mysextoyguide.com_ws7', ['https://www.mysextoyguide.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
