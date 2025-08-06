import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_naspa.de_3vl', ['https://www.naspa.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
