import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ksklb.de_m0q', ['https://www.ksklb.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
