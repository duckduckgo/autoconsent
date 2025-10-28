import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.aliexpress.com_xdj', ['https://fr.aliexpress.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
