import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berliner-sparkasse.de_epp', ['https://www.berliner-sparkasse.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
