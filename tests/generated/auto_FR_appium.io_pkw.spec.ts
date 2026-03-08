import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_appium.io_pkw', ['https://appium.io/docs/en/latest/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
