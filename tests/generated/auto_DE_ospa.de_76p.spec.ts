import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ospa.de_76p', ['https://www.ospa.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
