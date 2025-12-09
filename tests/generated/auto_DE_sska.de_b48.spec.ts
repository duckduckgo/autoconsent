import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sska.de_b48', ['https://www.sska.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
