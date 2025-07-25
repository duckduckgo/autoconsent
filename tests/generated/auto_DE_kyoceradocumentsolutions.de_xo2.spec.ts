import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kyoceradocumentsolutions.de_xo2', ['https://www.kyoceradocumentsolutions.de/de.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
