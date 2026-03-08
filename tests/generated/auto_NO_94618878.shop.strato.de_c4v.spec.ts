import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_94618878.shop.strato.de_c4v', ['https://94618878.shop.strato.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
