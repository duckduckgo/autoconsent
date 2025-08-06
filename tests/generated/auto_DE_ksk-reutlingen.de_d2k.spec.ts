import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ksk-reutlingen.de_d2k', ['https://www.ksk-reutlingen.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
