import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hannover.premiumkino.de_3xh', ['https://hannover.premiumkino.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
