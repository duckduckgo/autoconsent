import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_watchcrunch.com_0kn', ['https://www.watchcrunch.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
