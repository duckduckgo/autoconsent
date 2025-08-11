import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_sskm.de_nbi', ['https://www.sskm.de/de/home/login-online-banking.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
