import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sellercentral.amazon.de_vr3', ['https://sellercentral.amazon.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
