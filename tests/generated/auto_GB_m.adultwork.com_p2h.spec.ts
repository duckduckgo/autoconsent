import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_m.adultwork.com_p2h', ['https://m.adultwork.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
