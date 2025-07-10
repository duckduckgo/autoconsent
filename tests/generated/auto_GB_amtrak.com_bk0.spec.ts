import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_amtrak.com_bk0', ['https://www.amtrak.com/home.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
