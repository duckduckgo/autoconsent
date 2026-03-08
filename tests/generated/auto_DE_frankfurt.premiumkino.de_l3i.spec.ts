import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_frankfurt.premiumkino.de_l3i', ['https://frankfurt.premiumkino.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
