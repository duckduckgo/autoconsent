import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_stores-discount.com_36y', ['https://www.stores-discount.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
