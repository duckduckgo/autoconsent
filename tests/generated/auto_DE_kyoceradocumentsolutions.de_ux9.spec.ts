import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kyoceradocumentsolutions.de_ux9', ['https://www.kyoceradocumentsolutions.de/de.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
