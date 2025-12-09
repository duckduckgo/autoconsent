import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alpenbahnen-spitzingsee.de_7lq', ['https://www.alpenbahnen-spitzingsee.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
