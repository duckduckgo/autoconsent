import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_diebayerische.de_yd3', ['https://www.diebayerische.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
