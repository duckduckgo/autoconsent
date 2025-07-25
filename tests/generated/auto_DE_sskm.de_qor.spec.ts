import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sskm.de_qor', ['https://www.sskm.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
