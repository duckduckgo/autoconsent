import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_airsoft-discount.com_imf', ['https://airsoft-discount.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
