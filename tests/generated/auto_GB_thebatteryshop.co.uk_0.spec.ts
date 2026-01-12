import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thebatteryshop.co.uk_0', ['https://www.thebatteryshop.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
