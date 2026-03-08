import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_berlin.premiumkino.de_s69', ['https://berlin.premiumkino.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
