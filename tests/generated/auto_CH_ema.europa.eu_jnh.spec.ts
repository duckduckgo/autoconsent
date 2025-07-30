import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ema.europa.eu_jnh', ['https://www.ema.europa.eu/en/homepage'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
