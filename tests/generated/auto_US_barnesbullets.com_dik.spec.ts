import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_barnesbullets.com_dik', ['https://barnesbullets.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
