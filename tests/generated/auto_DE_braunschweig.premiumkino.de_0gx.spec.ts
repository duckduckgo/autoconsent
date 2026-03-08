import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_braunschweig.premiumkino.de_0gx', ['https://braunschweig.premiumkino.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
