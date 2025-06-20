import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_theguardian.com_h82', ['https://www.theguardian.com/theobserverarchive'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
