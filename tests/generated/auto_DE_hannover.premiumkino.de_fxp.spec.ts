import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hannover.premiumkino.de_fxp', ['https://hannover.premiumkino.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
