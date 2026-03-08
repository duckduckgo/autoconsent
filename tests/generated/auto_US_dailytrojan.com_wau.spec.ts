import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_dailytrojan.com_wau', ['https://dailytrojan.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
