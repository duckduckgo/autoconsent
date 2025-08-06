import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ksk-ostalb.de_kut', ['https://www.ksk-ostalb.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
