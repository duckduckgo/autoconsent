import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_briggsandstratton.com_ew4', ['https://www.briggsandstratton.com/na/en_us/home.html'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
