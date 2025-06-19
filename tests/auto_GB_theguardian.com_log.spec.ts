import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_theguardian.com_log', ['https://www.theguardian.com/theobserverarchive'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
