import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ema.europa.eu_avb', ['https://www.ema.europa.eu/en/homepage'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
