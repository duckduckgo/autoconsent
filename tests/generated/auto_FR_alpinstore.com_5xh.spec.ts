import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alpinstore.com_5xh', ['https://www.alpinstore.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
