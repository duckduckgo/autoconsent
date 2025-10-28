import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_flywith.virginatlantic.com_th1', ['https://flywith.virginatlantic.com/gb/en.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
