import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aroma-zone.com_sf5', ['https://www.aroma-zone.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
