import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_boatingmag.com_grn', ['https://www.boatingmag.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
