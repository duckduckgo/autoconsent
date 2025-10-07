import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zoopalast.premiumkino.de_rr9', ['https://zoopalast.premiumkino.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
