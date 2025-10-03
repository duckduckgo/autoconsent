import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_diebayerische.de_ncs', ['https://www.diebayerische.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
