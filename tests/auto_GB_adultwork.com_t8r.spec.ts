import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_adultwork.com_t8r', ['https://www.adultwork.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
