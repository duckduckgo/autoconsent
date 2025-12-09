import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shop.ledvance.com_9rx', ['https://shop.ledvance.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
