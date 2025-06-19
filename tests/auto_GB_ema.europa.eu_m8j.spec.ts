import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_ema.europa.eu_m8j', ['https://www.ema.europa.eu/en/homepage'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
