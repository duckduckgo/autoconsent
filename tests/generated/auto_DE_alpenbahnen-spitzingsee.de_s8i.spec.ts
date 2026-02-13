import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alpenbahnen-spitzingsee.de_s8i', ['https://www.alpenbahnen-spitzingsee.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
