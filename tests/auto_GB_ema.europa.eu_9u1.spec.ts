import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_ema.europa.eu_9u1', ['https://www.ema.europa.eu/en/homepage'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
