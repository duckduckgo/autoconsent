import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ostsaechsische-sparkasse-dresden.de_0qk', ['https://www.ostsaechsische-sparkasse-dresden.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
