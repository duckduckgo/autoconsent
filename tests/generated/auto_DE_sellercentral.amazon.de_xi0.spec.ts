import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sellercentral.amazon.de_xi0', ['https://sellercentral.amazon.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
