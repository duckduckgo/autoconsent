import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sallybeauty.com_pg6', ['https://www.sallybeauty.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
