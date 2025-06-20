import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_adultwork.com_l1i', ['https://www.adultwork.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
