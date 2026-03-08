import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_busse-yachtshop.de_h9l', ['https://busse-yachtshop.de/s/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
