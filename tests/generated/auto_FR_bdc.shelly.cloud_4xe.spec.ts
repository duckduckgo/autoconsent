import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bdc.shelly.cloud_4xe', ['https://bdc.shelly.cloud/base-de-connaissances/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
