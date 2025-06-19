import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_ema.europa.eu_t2d', ['https://www.ema.europa.eu/en/homepage'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
