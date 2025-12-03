import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_vehiclescore.co.uk_0', ['https://vehiclescore.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
