import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hannover.premiumkino.de_2sz', ['https://hannover.premiumkino.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
