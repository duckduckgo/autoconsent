import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_m.adultwork.com_msk', ['https://m.adultwork.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
