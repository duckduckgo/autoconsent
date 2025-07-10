import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_watchcrunch.com_kl4', ['https://www.watchcrunch.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
