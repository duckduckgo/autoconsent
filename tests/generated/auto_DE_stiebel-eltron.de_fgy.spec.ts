import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stiebel-eltron.de_fgy', ['https://www.stiebel-eltron.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
