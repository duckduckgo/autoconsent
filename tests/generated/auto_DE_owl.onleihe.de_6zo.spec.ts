import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_owl.onleihe.de_6zo', ['https://owl.onleihe.de/owl/frontend/welcome,51-0-0-100-0-0-1-0-0-0-0.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
