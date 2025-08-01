import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_naspa.de_u2h', ['https://www.naspa.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
