import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gutscheine.de_dxq', ['https://www.gutscheine.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
