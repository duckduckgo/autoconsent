import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sellercentral-europe.amazon.com_7sy', ['https://sellercentral-europe.amazon.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
