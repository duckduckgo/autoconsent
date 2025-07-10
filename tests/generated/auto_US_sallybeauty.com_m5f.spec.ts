import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sallybeauty.com_m5f', ['https://www.sallybeauty.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['US'],
});
