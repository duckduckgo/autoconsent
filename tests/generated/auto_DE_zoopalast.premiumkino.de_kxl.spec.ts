import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zoopalast.premiumkino.de_kxl', ['https://zoopalast.premiumkino.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
