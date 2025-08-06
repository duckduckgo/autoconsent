import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ksklb.de_3fj', ['https://www.ksklb.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
